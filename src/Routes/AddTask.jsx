
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask({ projects, onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !selectedProjectId) {
      alert("Task title and project are required");
      return;
    }

    onAddTask({
      title,
      description,
      projectId: selectedProjectId,
      status: "todo",
    });

    alert("Task added successfully!");
    navigate("/");
  };

  return (
    <div className="form-page">
      <h1>Add Task</h1>
      <form className="form-page__form" onSubmit={handleSubmit}>
        <label>
          <span>Task Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>Select Project</span>
          <select
            value={selectedProjectId}
            onChange={(e) => setSelectedProjectId(e.target.value)}
            required
          >
            <option value="">Choose a project...</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Task Description</span>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="submit" className="btn btn-primary">
          Save Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
