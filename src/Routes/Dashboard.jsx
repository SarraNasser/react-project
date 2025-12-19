// src/routes/Dashboard.jsx - النسخة القديمة بدون slice
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

function Dashboard({ projects, tasks, onDeleteProject }) {
  const projectsWithTasksCount = projects.map((project) => {
    const projectTasks = tasks.filter(
      (task) => String(task.projectId) === String(project.id)
    );
    return { ...project, tasks: projectTasks };
  });

  const totalProjects = projects.length;
  const totalTasks = tasks.length;

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div>
          <h1>Projects</h1>
          <p style={{ marginTop: "0.4rem", fontSize: "0.9rem", color: "#6b7280" }}>
            {totalProjects} projects • {totalTasks} tasks
          </p>
        </div>

        <Link to="/add-project" className="btn btn-primary">
          + Add Project
        </Link>
      </div>

      <div className="dashboard__projects-grid">
        {projectsWithTasksCount.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
            onDeleteProject={onDeleteProject}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
