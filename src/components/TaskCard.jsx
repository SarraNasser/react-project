function TaskCard({ task, onMove, onDelete }) {
  return (
    <article className="task-card">
      <h4 className="task-card__title">{task.title}</h4>
      <p className="task-card__description">{task.description}</p>

      <div className="task-card__actions">
        {onMove && (
          <>
            <button
              type="button"
              className="btn btn-xs"
              onClick={() => onMove("todo")}
            >
              To Do
            </button>
            <button
              type="button"
              className="btn btn-xs"
              onClick={() => onMove("in-progress")}
            >
              In Progress
            </button>
            <button
              type="button"
              className="btn btn-xs"
              onClick={() => onMove("done")}
            >
              Done
            </button>
          </>
        )}

        {onDelete && (
          <button
            type="button"
            className="btn btn-xs btn-danger"
            onClick={onDelete}
          >
            Delete
          </button>
        )}
      </div>
    </article>
  );
}

export default TaskCard;
