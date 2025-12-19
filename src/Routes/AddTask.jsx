// src/routes/AddTask.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask({ projects, onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");
  const [status, setStatus] = useState("todo");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !projectId) {
      return;
    }

    onAddTask({
      title,
      description,
      projectId,
      status,
    });

    navigate(`/project/${projectId}`);
  };

  return (
    <div className="form-page">
      <h1>Add Task</h1>
      <form className="form-page__form" onSubmit={handleSubmit}>
        <label>
          Task Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Task Description
          <textarea
            name="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Select Project
          <select
            name="projectId"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
          >
            <option value="">Select project</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
        </label>

        <label>
          Status
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <button type="submit" className="btn btn-primary">
          Save Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
