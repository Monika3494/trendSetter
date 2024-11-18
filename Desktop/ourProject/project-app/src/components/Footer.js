import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section">
          <h2 className="footer-logo">TrendSetter</h2>
          <div className="app-buttons">
            <img src="google-play.png" alt="Google Play" className="app-store" />
            <img src="app-store.png" alt="App Store" className="app-store" />
          </div>
        </div>

        {/* Product Links */}
        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li><a href="/color-analysis">Color Analysis</a></li>
            <li><a href="/figure-and-fit">aboutus</a></li>
            <li><a href="/style-type">Style Type</a></li>
          </ul>
        </div>

        {/* Blog Links */}
        <div className="footer-section">
          <h3>Blog</h3>
          <ul>
            <li><a href="/hourglass-guide">How to Dress an Hourglass Body Shape</a></li>
            <li><a href="/triangle-guide">Triangle Body Shape – Complete Style Guide</a></li>
            <li><a href="/rectangle-guide">Rectangle Body Shape: Complete Style Guide</a></li>
            <li><a href="/inverted-triangle-guide">Inverted Triangle Body Shape: Complete Style Guide</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <img src="tiktok-icon.png" alt="TikTok" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src="linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="footer-bottom">
        <ul>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/cookie-policy">Cookie Policy</a></li>
          <li><a href="/terms">Terms of Use</a></li>
        </ul>
        <p>2024 © Style DNA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
