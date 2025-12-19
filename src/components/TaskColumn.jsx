import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, onMoveTask, onDeleteTask }) {
  return (
    <section className="task-column">
      <h3 className="task-column__title">{title}</h3>

      <div className="task-column__list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onMove={(status) => onMoveTask(task.id, status)}
            onDelete={() => onDeleteTask(task.id)}
          />
        ))}

        {tasks.length === 0 && (
          <p className="task-column__empty">No tasks</p>
        )}
      </div>
    </section>
  );
}

export default TaskColumn;
