import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">Task Dashboard</div>
      <nav className="navbar__links">
        <NavLink to="/" className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/add-project" className="nav-link">
          Add Project
        </NavLink>
        <NavLink to="/add-task" className="nav-link">
          Add Task
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
