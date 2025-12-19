// src/layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-shell__content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

