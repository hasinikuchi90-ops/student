import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ScholarshipType from "./pages/ScholarshipType";

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [page, setPage] = useState("dashboard");

  if (!user) {
    return showRegister ? (
      <Register setShowRegister={setShowRegister} />
    ) : (
      <LoginPage setUser={setUser} setShowRegister={setShowRegister} />
    );
  }

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar">
        <h2>Scholarship System</h2>

        <div className="nav-right">
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
          <button onClick={() => setPage("types")}>Scholarships</button>
          <button className="logout" onClick={() => setUser(null)}>
            Logout
          </button>
        </div>
      </div>

      {/* PAGE SWITCHING */}
      {page === "dashboard" && (
        <Dashboard user={user} />
      )}

      {page === "types" && <ScholarshipType />}
    </div>
  );
}

export default App;