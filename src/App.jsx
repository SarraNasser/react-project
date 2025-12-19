// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Dashboard from "./routes/Dashboard";
import ProjectTasks from "./routes/ProjectTasks";
import AddProject from "./routes/AddProject";
import AddTask from "./routes/AddTask";

function App() {
  // ----- STATE -----
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://69442f687dd335f4c35f8d69.mockapi.io/api/ProjectsManagerv1";

  // ----- FETCH DATA FROM API -----
  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/Projects`),
      fetch(`${API_URL}/Tasks`),
    ])
      .then(([resProj, resTask]) => {
        if (!resProj.ok || !resTask.ok) {
          throw new Error("API Fetch Failed");
        }
        return Promise.all([resProj.json(), resTask.json()]);
      })
      .then(([projectsData, tasksData]) => {
        setProjects(projectsData);
        setTasks(tasksData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  // ----- LOGIC FUNCTIONS (LOCAL STATE) -----
  const addNewProject = (newProject) => {
    const projectWithId = { ...newProject, id: Date.now().toString() };
    setProjects((prev) => [...prev, projectWithId]);
  };

  const addNewTask = (newTask) => {
    const taskWithId = { ...newTask, id: Date.now().toString() };
    setTasks((prev) => [...prev, taskWithId]);
  };

  const deleteProject = (projectId) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
    setTasks((prev) =>
      prev.filter((t) => String(t.projectId) !== String(projectId))
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const moveTask = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, status: newStatus } : t
      )
    );
  };

  // ----- LOADING SCREEN -----
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Loading Mini Trello Data...</h2>
      </div>
    );
  }

  // ----- ROUTES -----
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Dashboard */}
        <Route
          path="/"
          element={
            <Dashboard
              projects={projects}
              tasks={tasks}
              onDeleteProject={deleteProject}
            />
          }
        />

        {/* Project Tasks */}
        <Route
          path="/project/:id"
          element={
            <ProjectTasks
              projects={projects}
              tasks={tasks}
              onDelete={deleteTask}
              onMove={moveTask}
            />
          }
        />

        {/* Add Project */}
        <Route
          path="/add-project"
          element={<AddProject onAddProject={addNewProject} />}
        />

        {/* Add Task */}
        <Route
          path="/add-task"
          element={
            <AddTask
              projects={projects}
              onAddTask={addNewTask}
            />
          }
        />

      
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;

