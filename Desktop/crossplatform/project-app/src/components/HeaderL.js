
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import './LogIn.css'; // Include the styles for the modal here
import prof from './profile.jpg'


const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state for LogIn
  const navigate = useNavigate(); // Hook to navigate programmatically
  


        // <div className='avatar' onClick={profClick}></div>
  
        function profClick(){
            navigate('/profile');
        }

  const handleLogin = () => {
    // Simulate successful login
    // login(email, password);    
    // Close the modal after login
    navigate('/Landing'); // Redirect to landing page
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
            <NavLink to="/AboutUs" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              AboutUs
            </NavLink>
          </li>
          <li>
            <NavLink to="/ColorAnalysis" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              ColorAnalysis
            </NavLink>
          </li>
          <li>
            <NavLink to="/StyleType" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Style Type
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Blogs
            </NavLink>
          </li>
        </ul>
      </nav>


     

      {/* LogIn Button */}
      <div className="header-right">
        {/* { isModalOpen ? (<div className='avatar'> Log Out</div>) : (<button onClick={() => setIsModalOpen(true)}>Log In</button>) } */}
        <div className='avatar' onClick={profClick}>
            <img src={prof} alt="Profile" />
        </div>
        
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
              <button
                type="button"
                className="form-button"
                onClick={handleLogin}
              >
                Log In
              </button>
            </form>

            {/* Sign Up and Forgot Password */}
            <div className="modal-links">
              <button
                className="form-link"
                onClick={() => alert('Sign Up logic here')}
              >
                Sign Up
              </button>
              <button
                className="form-link"
                onClick={() => alert('Forgot Password logic here')}
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



