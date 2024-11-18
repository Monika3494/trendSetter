// import React from 'react';
// import './Landing.css';
// import Header from '../components/Header'; // Assuming Header is in the components folder
// import Footer from '../components/Footer';

// const Landing = () => {
//   return (
//     <div>
//       <Header hideLogin /> {/* Pass a prop to hide the Login button */}
//       <div className="landing-container">
//         <h1 className="landing-title">Welcome to TrendSetter</h1>
//         <p className="landing-subtitle">
//           Select your preferred upper wear and bottom wear to get personalized recommendations!
//         </p>

//         <div className="option-section">
//           {/* Upper Wear Card */}
//           <div className="option-card">
//             <img src="Upper-wear.jpeg" alt="Upper-wear" className="option-image" />
//             <h3 className="option-title">Upper Wear</h3>
//             <p className="option-description">Choose from a variety of shirts, tops, and more to match your style.</p>
//             <button className="select-btn">Select Upper Wear</button>
//           </div>

//           {/* Bottom Wear Card */}
//           <div className="option-card">
//             <img src="Bottom-wear.jpeg" alt="Bottom-wear" className="option-image" />
//             <h3 className="option-title">Bottom Wear</h3>
//             <p className="option-description">Explore pants, skirts, and more to pair with your look.</p>
//             <button className="select-btn">Select Bottom Wear</button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Landing;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import Header from "../components/HeaderL"; // Assuming Header is in the components folder
import Footer from "../components/Footer";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header hideLogin /> {/* Pass a prop to hide the Login button */}
      <div className="landing-container">
        <h1 className="landing-title">Welcome to TrendSetter</h1>
        <p className="landing-subtitle">
          Select your preferred upper wear and bottom wear to get personalized recommendations!
        </p> 

        <div className="option-section">
          {/* Upper Wear Card */}
          <div className="option-card">
            <img src="Upper-wear.jpeg" alt="Upper-wear" className="option-image" />
            <h3 className="option-title">Upper Wear</h3>
            <p className="option-description">
              Choose from a variety of shirts, tops, and more to match your style.
            </p>
            <button className="select-btn" onClick={() => navigate("/UpperWear")}>
              Select Upper Wear
            </button>
          </div>

          {/* Bottom Wear Card */}
          <div className="option-card">
            <img src="Bottom-wear.jpeg" alt="Bottom-wear" className="option-image" />
            <h3 className="option-title">Bottom Wear</h3>
            <p className="option-description">
              Explore pants, skirts, and more to pair with your look.
            </p>
            <button className="select-btn" onClick={() => navigate("/BottomWear")}>
              Select Bottom Wear
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
