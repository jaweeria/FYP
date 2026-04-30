import React from 'react';
import logo from './assets/logo.png'; // Assuming logo is placed here based on your description

const Signin = () => {
  return (
    <div className="signin-container">
      {/* Navigation Bar */}
      <nav className="signin-navbar">
        <div className="signin-logo-text">ZADERAH</div>
        <div className="signin-nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#packages">Packages</a>
          <a href="#guides">Guides</a>
          <a href="#signin" className="signin-btn-outline-nav">Sign In</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="signin-hero">
        <div className="signin-hero-content">
          <h1 className="signin-hero-title">
            Your Sacred Journey,<br />
            Perfectly Guided.
          </h1>
          <p className="signin-hero-subtitle">
            Experience a seamless Hajj and Umrah pilgrimage with real-time<br />
            guidance, essential Duas, and curated packages tailored for your<br />
            spiritual fulfillment.
          </p>
          <div className="signin-hero-buttons">
            <button className="signin-btn-primary">Get Started</button>
            <button className="signin-btn-outline">View Packages</button>
          </div>
        </div>
        <div className="signin-hero-image">
          {/* Logo imported from assets */}
          <img src={logo} alt="Zaderah Logo" />
        </div>
      </main>
    </div>
  );
};

export default Signin;
