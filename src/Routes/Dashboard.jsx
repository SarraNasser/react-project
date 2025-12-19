// src/routes/Dashboard.jsx
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

function Dashboard({ projects, tasks }) {
  // نحسب عدد التاسكات لكل مشروع من الـ tasks اللي جاية من App
  const projectsWithTasksCount = projects.map((project) => {
    const projectTasks = tasks.filter(
      (task) => task.projectId === project.id || task.projectId === String(project.id)
    );
    return { ...project, tasks: projectTasks };
  });

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1>Projects</h1>
        <Link to="/add-project" className="btn btn-primary">
          + Add Project
        </Link>
      </div>

      <div className="dashboard__projects-grid">
        {projectsWithTasksCount.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

