/// src/components/TaskColumn.jsx
import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, onMoveTask, onDeleteTask }) {
  return (
    <section className="task-column">
      <h2 className="task-column__title">{title}</h2>

      <div className="task-column__list">
        {tasks.length === 0 ? (
          <p className="task-column__empty">No tasks</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onMoveTask={onMoveTask}
              onDeleteTask={onDeleteTask}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default TaskColumn;
