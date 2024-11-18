import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    height: "",
    weight: "",
    undertone: "",
    faceType: "",
  });

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = () => {
    navigate('/Landing');
    console.log(userDetails); // Log the details for verification
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your Profile</h1>

      {/* User Details Section */}
      <div className="profile-section">
        <h2>Personal Details</h2>
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="input-group">
          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            value={userDetails.height}
            onChange={handleInputChange}
            placeholder="Enter your height"
          />
        </div>
        <div className="input-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={userDetails.weight}
            onChange={handleInputChange}
            placeholder="Enter your weight"
          />
        </div>
      </div>

      {/* Undertone Section */}
      <div className="profile-section">
        <h2>Undertone Analysis</h2>
        <p>Select your skin undertone:</p>
        <div className="grid-container">
          <button
            onClick={() =>
              setUserDetails({ ...userDetails, undertone: "Warm" })
            }
          >
            Warm
          </button>
          <button
            onClick={() =>
              setUserDetails({ ...userDetails, undertone: "Cool" })
            }
          >
            Cool
          </button>
          <button
            onClick={() =>
              setUserDetails({ ...userDetails, undertone: "Neutral" })
            }
          >
            Neutral
          </button>
        </div>
      </div>

      {/* Face Shape Section */}
      <div className="profile-section">
        <h2>Face Shape</h2>
        <p>Select your face type:</p>
        <div className="grid-container">
          <button
            onClick={() => setUserDetails({ ...userDetails, faceType: "Oval" })}
          >
            Oval
          </button>
          <button
            onClick={() =>
              setUserDetails({ ...userDetails, faceType: "Round" })
            }
          >
            Round
          </button>
          <button
            onClick={() =>
              setUserDetails({ ...userDetails, faceType: "Square" })
            }
          >
            Square
          </button>
          <button
            onClick={() =>
              setUserDetails({ ...userDetails, faceType: "Heart" })
            }
          >
            Heart
          </button>
        </div>
      </div>

      {/* Submit Section */}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit Profile
      </button>
    </div>
  );
};

export default Profile;
