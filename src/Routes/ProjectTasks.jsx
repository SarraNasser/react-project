// src/routes/ProjectTasks.jsx
import { useParams, Link } from "react-router-dom";
import TaskColumn from "../components/TaskColumn";

function ProjectTasks({ projects, tasks, onDelete, onMove }) {
  const { id } = useParams();
  const projectId = id; // string

  const currentProject = projects.find(
    (p) => String(p.id) === String(projectId)
  );

  const projectTitle = currentProject
    ? currentProject.title
    : `Project ${projectId}`;


  const projectTasks = tasks.filter(
    (t) => String(t.projectId) === String(projectId)
  );

  const todo = projectTasks.filter((t) => t.status === "todo");
  const inProgress = projectTasks.filter(
    (t) => t.status === "in-progress"
  );
  const done = projectTasks.filter((t) => t.status === "done");

  const handleMoveTask = (taskId, newStatus) => {
    onMove(taskId, newStatus);
  };

  const handleDeleteTask = (taskId) => {
    onDelete(taskId);
  };

  return (
    <div className="project-tasks">
      <header className="project-tasks__header">
        <h1>{projectTitle}</h1>
        <Link to="/add-task" className="btn btn-primary">
          + Add Task
        </Link>
      </header>

      <div className="project-tasks__columns">
        <TaskColumn
          title="To Do"
          tasks={todo}
          onMoveTask={handleMoveTask}
          onDeleteTask={handleDeleteTask}
        />
        <TaskColumn
          title="In Progress"
          tasks={inProgress}
          onMoveTask={handleMoveTask}
          onDeleteTask={handleDeleteTask}
        />
        <TaskColumn
          title="Done"
          tasks={done}
          onMoveTask={handleMoveTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default ProjectTasks;
