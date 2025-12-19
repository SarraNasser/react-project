// src/components/TaskCard.jsx
import { Link } from "react-router-dom";

function TaskCard({ task, onMoveTask, onDeleteTask }) {
  const handleMove = (newStatus) => {
    onMoveTask(task.id, newStatus);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div className="task-card">
      <h3 className="task-card__title">{task.title}</h3>
      {task.description && (
        <p className="task-card__description">{task.description}</p>
      )}
      
      <div className="task-card__actions">
        <button
          className="btn btn-small btn-secondary"
          onClick={() => handleMove("todo")}
        >
          To Do
        </button>
        <button
          className="btn btn-small btn-secondary"
          onClick={() => handleMove("in-progress")}
        >
          In Progress
        </button>
        <button
          className="btn btn-small btn-secondary"
          onClick={() => handleMove("done")}
        >
          Done
        </button>
        <button
          className="btn btn-small btn-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
