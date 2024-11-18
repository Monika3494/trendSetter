import React, { useState } from 'react';
import './LogIn.css';

const LogIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    // Simulate successful login
    window.location.href = "/Landing"; // Redirect to the landing page
  };

  return (
    <div>
      {/* Log In Button */}
      <button className="login-button" onClick={() => setIsModalOpen(true)}>
        Log In
      </button>

      {/* Modal */}
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
            <form>
              <input
                type="email"
                placeholder="Email"
                required
                className="login-input"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="login-input"
              />
              <button type="button" className="form-button" onClick={handleLogin}>
                Log In
              </button>
            </form>

            {/* Sign Up and Forgot Password */}
            <div className="modal-links">
              <button className="form-link" onClick={() => alert("Sign Up logic here")}>
                Sign Up
              </button>
              <button
                className="form-link"
                onClick={() => alert("Forgot Password logic here")}
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
