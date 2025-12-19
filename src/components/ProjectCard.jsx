// src/components/ProjectCard.jsx
import { Link } from "react-router-dom";

function ProjectCard({ project, onDeleteProject }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      onDeleteProject(project.id);
    }
  };

  return (
    <div className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <button
          className="btn btn-small btn-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      
      {project.description && (
        <p className="project-card__description">{project.description}</p>
      )}
      
      <div className="project-card__footer">
        <span className="project-card__tasks-count">
          {project.tasks?.length || 0} tasks
        </span>
        <Link
          to={`/projects/${project.id}/tasks`}
          className="btn btn-primary btn-small"
        >
          View Tasks
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
