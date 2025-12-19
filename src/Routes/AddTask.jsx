// src/routes/AddTask.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AddTask({ onAddTask }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Task title is required");
      return;
    }

    onAddTask({
      id: Date.now(), // ID مؤقت
      title,
      description,
      projectId: id,
      status: "todo",
    });

    alert("Task added successfully!"); // ✅ Bonus Alert
    navigate(`/projects/${id}/tasks`);
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
