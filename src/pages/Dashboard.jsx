import React, { useState, useEffect } from "react";

function Dashboard({ user, setUser }) {
  const [applications, setApplications] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: user?.email || "",
    amount: "",
    type: ""
  });

  const API = "http://localhost:5000/api";

  // Submit application
  const submitApplication = async () => {
    if (!form.name || !form.email || !form.amount || !form.type) {
      alert("Fill all fields");
      return;
    }

    await fetch(API + "/applications/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    alert("Application Submitted!");

    setForm({
      name: "",
      email: user.email,
      amount: "",
      type: ""
    });

    loadData();
  };

  // Load applications
  const loadData = async () => {
    const res = await fetch(API + "/applications");
    const data = await res.json();
    setApplications(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="dashboard">

      {/* NAVBAR */}
      <div className="navbar">
        <h2>Scholarship Portal</h2>

        <div className="nav-right">
          <span>{user.email}</span>
          <button className="logout" onClick={() => setUser(null)}>
            Logout
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="content">

        {/* FORM */}
        <div className="form-section">
          <h3>Apply for Scholarship</h3>

          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Email"
            value={form.email}
            disabled
          />

          <input
            placeholder="Amount"
            value={form.amount}
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
          />

          {/* TYPE DROPDOWN */}
          <select
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
          >
            <option value="">Select Type</option>
            <option value="Merit">Merit</option>
            <option value="Need">Need</option>
            <option value="Sports">Sports</option>
            <option value="Category">Category</option>
          </select>

          <button onClick={submitApplication}>
            Submit Application
          </button>
        </div>

        {/* APPLICATION LIST */}
        <div className="list-section">
          <h3>Applications</h3>

          {applications.length === 0 ? (
            <p>No applications yet</p>
          ) : (
            applications.map((app, i) => (
              <div className="card" key={i}>
                <p><strong>Name:</strong> {app.name}</p>
                <p><strong>Email:</strong> {app.email}</p>
                <p><strong>Amount:</strong> ₹{app.amount}</p>
                <p><strong>Type:</strong> {app.type}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className="status">{app.status}</span>
                </p>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;