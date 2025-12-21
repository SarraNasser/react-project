// src/routes/ProjectTasks.jsx
import { useParams, Link } from "react-router-dom";
import TaskColumn from "../components/TaskColumn";

function ProjectTasks({ projects, tasks, onDelete, onMove }) {
  const { id } = useParams();
  const projectId = id;

  const currentProject = projects.find(
    (p) => String(p.id) === String(projectId)
  );
  const projectTitle = currentProject
    ? currentProject.title
    : `Project ${projectId}`;


  
  const projectTasks = Array.isArray(tasks) 
    ? tasks.filter((task) => {
        const cleanTaskId = String(task.projectId).replace(/\D/g, ""); 
        const cleanUrlId = String(id).replace(/\D/g, "");
        return cleanTaskId === cleanUrlId;
      }) 
    : [];
  const todo = projectTasks.filter((t) => 
    t.status?.toLowerCase().replace(/\s/g, "") === "todo"
  );
  
  const inProgress = projectTasks.filter((t) => 
    t.status?.toLowerCase().replace(/[\s-]/g, "") === "inprogress"
  );
  
  const done = projectTasks.filter((t) => 
    t.status?.toLowerCase() === "done"
  );
 
  const handleMoveTask = (taskId, newStatus) => {
    onMove(taskId, newStatus);
  };

  const handleDeleteTask = (taskId) => {
    onDelete(taskId);
  };
console.log("URL ID:", id);
console.log("First Task Project ID:", tasks[0]?.projectId);
  return (
    <div className="project-tasks">
      <header className="project-tasks__header">
        <h1 className="project-tasks__title">{projectTitle}</h1>
       
        <Link to={`/add-task`}className="btn btn-primary">ىح
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
