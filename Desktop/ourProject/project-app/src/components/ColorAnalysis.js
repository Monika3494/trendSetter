import React from "react";
import "./ColorAnalysis.css";
import Header from "./HeaderL";

const ColorAnalysis = () => {
  return (
    <>
      <Header />
      <div className="color-analysis">
        <div className="color-analysis-header">
          <h1>Color Analysis</h1>
          <p>
            One selfie is all it takes for our smart science to analyze your
            unique features and reveal the colors that enhance your natural
            beauty. Get your personal color palette.
          </p>
          <button className="download-app-btn">Download App →</button>
        </div>

        <div className="color-steps">
          <div className="step">
            <div className="icon step-1"></div>
            <div className="step-content">
              <span className="step-number">Step 1</span>
              <p>Scan your face without glasses</p>
            </div>
          </div>
          <div className="step">
            <div className="icon step-2"></div>
            <div className="step-content">
              <span className="step-number">Step 2</span>
              <p>Get palette for your color type</p>
            </div>
          </div>
          <div className="step">
            <div className="icon step-3"></div>
            <div className="step-content">
              <span className="step-number">Step 3</span>
              <p>Choose clothes that match your color type</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorAnalysis;
