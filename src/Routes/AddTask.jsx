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

    alert(`Adding Task: ${newTask.title} to Project ID: ${newTask.projectId}`); // 👈 انظري لهذا في الكونسول عند الضغط على Save

    onAddTask(newTask);

    alert("Task added successfully!");
    navigate(`/projects/${selectedProjectId}/tasks`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <label>Task Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: "100%" }} />
        </label>

        <label>Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "100%" }} />
        </label>

        {/* 1. Select Project Dropdown */}
        <label>Select Project:
          <select 
            value={selectedProjectId} 
            onChange={(e) => setSelectedProjectId(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          >
            <option value="">-- Choose a Project --</option>
            {projects.map(proj => (
              <option key={proj.id} value={proj.id}>{proj.title}</option>
            ))}
          </select>
        </label>

        {/* 2. Select Status Dropdown */}
        <label>Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ width: "100%", padding: "5px" }}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>

        <button type="submit" style={{ padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer" }}>
          Save Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
