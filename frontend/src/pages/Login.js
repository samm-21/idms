import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-brand">
          <img src="/assets/idms_logo.svg" alt="IDMS" className="login-logo" onError={(e) => { e.target.style.display = "none"; e.target.nextSibling?.classList.add("show"); }} />
          <span className="login-logo-fallback">IDMS</span>
        </div>
        <h1 className="login-title">Sign in</h1>
        <p className="login-subtitle">Enter your credentials to access the dashboard</p>
        <form onSubmit={login} className="login-form">
          <label className="login-label">Email</label>
          <input
            type="text"
            autoComplete="username email"
            className="login-input"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="login-label">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            className="login-input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
