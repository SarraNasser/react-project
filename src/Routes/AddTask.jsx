import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask({ projects, onAddTask }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !selectedProjectId) {
      alert("Please fill in the title and select a project");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: title,
      description: description,
      projectId: String(selectedProjectId),
      status: status,
    };

    onAddTask(newTask);
    alert("Task added successfully!");
    navigate(`/projects/${selectedProjectId}/tasks`);
  };

  return (
    <div className="form-page">
      <h1 className="project-tasks__title" style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>
        Add New Task
      </h1>

      <form onSubmit={handleSubmit} className="form-page__form">
        <label>
          <span>Task Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
          />
        </label>

        <label>
          <span>Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add some details..."
            rows="4"
          />
        </label>

        <label>
          <span>Select Project</span>
          <select
            value={selectedProjectId}
            onChange={(e) => setSelectedProjectId(e.target.value)}
          >
            <option value="">-- Choose a Project --</option>
            {projects.map((proj) => (
              <option key={proj.id} value={proj.id}>
                {proj.title}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Status</span>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>

        <div style={{ marginTop: "1rem" }}>
          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
} // هذا القوس كان مفقوداً أو في مكان خاطئ

export default AddTask;