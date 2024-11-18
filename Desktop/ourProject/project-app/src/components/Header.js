import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import "./LogIn.css"; // Include the styles for the modal here
import { login, register } from "../api";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state for LogIn
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, Setsignupopen] = useState(false);

  function profClick() {
    navigate("/profile");
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    // Simulate successful login

    const success = await login(email, password);
    if (success) {
      setIsModalOpen(false); // Close the modal after login
      navigate("/Landing"); // Redirect to landing page
    }

    // Close the modal after login
    // Redirect to landing page
  };

  const handleSignup = async () => {
    // Simulate successful login

    const success = await register(email, password);
    if (success) {
      setIsModalOpen(false); // Close the modal after login
      navigate("/profile"); // Redirect to landing page
    }

    // Close the modal after login
    // Redirect to landing page
  };

  return (
    <header className="header">
      {/* Header Left */}
      <div className="header-left">
        <h1>TrendSetter</h1>
      </div>

      {/* Navigation Links */}
      <nav className="header-center">
        <ul>
          <li>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              AboutUs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ColorAnalysis"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              ColorAnalysis
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/StyleType"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Style Type
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* LogIn Button */}
      <div className="header-right">
        {isModalOpen ? (<></>
          // <div className="avatar"> Log Out</div>
        ) : (
          <button onClick={() => setIsModalOpen(true)}>Login / Signup</button>
        )}

        {/* <button onClick={() => setIsModalOpen(true)} className="LogIn-btn">
          Log In
        </button> */}
      </div>

      {/* LogIn Modal */}
      {isModalOpen && (
        <div className="login-modal">
          <div className="login-modal-content">
            <button
              className="close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2>Welcome to TrendSetter</h2>

            {/* Google Sign-Up */}
            <button className="google-login">Sign Up with Google</button>

            {/* Log In Form */}

            {signup ? (
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={changeEmail}
                  required
                  className="login-input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={changePassword}
                  required
                  className="login-input"
                />
                <button
                  type="button"
                  className="form-button"
                  onClick={handleSignup}
                >
                  Signup
                </button>
              </form>
            ) : (
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={changeEmail}
                  required
                  className="login-input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={changePassword}
                  required
                  className="login-input"
                />
                <button
                  type="button"
                  className="form-button"
                  onClick={handleLogin}
                >
                  Log In
                </button>
              </form>
            )}

            {/* Sign Up and Forgot Password */}
            <div className="modal-links">
              <button
                className="form-link"
                onClick={() => Setsignupopen(!signup)}
              >
                {signup ? "Log In" : "Sign Up"}
              </button>
              <button
                className="form-link"
                onClick={() => {
                  alert("Bhule Kyu the? Gajni ho kya");
                  alert("Ab to naya banana pdega!!");
                }}
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
