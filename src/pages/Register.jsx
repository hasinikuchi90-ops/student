import React, { useState } from "react";

function Register({ setShowRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (name && email && password) {
      alert("Registered Successfully!");
      setShowRegister(false);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>

        <button
          className="login-btn"
          onClick={() => setShowRegister(false)}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Register;