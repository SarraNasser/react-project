// src/layout/Navbar.jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Task Dashboard</div>
      <div className="navbar__links">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/add-project" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }
        >
          Add Project
        </NavLink>
        <NavLink 
          to="/add-task" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }
        >
          Add Task
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

