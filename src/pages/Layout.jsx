import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="layout">

      {/* NAVBAR */}
      <nav className="navbar">
        <h3 className="logo">Scholarship System</h3>

        <div className="nav-links">
          <Link
            to="/dashboard"
            className={location.pathname === "/dashboard" ? "active" : ""}
          >
            Dashboard
          </Link>

          <Link
            to="/scholarships"
            className={location.pathname === "/scholarships" ? "active" : ""}
          >
            Scholarships
          </Link>

          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}