import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const tasksCount = project.tasks?.length || 0;

  return (
    <section className="project-card">
      <header className="project-card__header">
        <h2 className="project-card__title">{project.title}</h2>
      </header>

      <p className="project-card__description">{project.description}</p>

      <div className="project-card__footer">
        <span className="project-card__tasks-count">
          {tasksCount} tasks
        </span>

        <Link
          to={`/project/${project.id}`}
          className="btn btn-outline"
        >
          View Tasks
        </Link>
      </div>
    </section>
  );
}

export default ProjectCard;
