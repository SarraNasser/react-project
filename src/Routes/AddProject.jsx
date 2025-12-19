// src/routes/AddProject.jsx - النسخة القديمة البسيطة
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProject({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Project title is required");
      return;
    }

    onAddProject({
      title,
      description,
    });

    alert("Project added successfully!");

    navigate("/");
  };

  return (
    <div className="form-page">
      <h1>Add Project</h1>
      <form className="form-page__form" onSubmit={handleSubmit}>
        <label>
          <span>Project Title</span>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>Project Description</span>
          <textarea
            name="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="submit" className="btn btn-primary">
          Save Project
        </button>
      </form>
    </div>
  );
}

export default AddProject;
