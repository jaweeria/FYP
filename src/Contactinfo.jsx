import React from "react";
import "./App.css";

const Contactinfo = () => {
  return (
    <div className="page">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">ZADERAH</div>
        <div className="nav-links">
          <span>Dashboard</span>
          <span>Packages</span>
          <span>Guides</span>
          <span className="active">Profile</span>
        </div>
      </div>

      {/* Heading */}
      <h3 className="help-text">Need Help?</h3>

      {/* Card */}
      <div className="contact-card">
        <div className="card-header">
          <h2>Contact Information</h2>
          <p>✉ ZadeRah@gmail.com</p>
        </div>

        <div className="form-grid">
          <div>
            <label>FIRST NAME</label>
            <input placeholder="John" />
          </div>

          <div>
            <label>LAST NAME</label>
            <input placeholder="Doe" />
          </div>

          <div>
            <label>EMAIL ADDRESS</label>
            <input placeholder="abc@gmail.com" />
          </div>

          <div>
            <label>PHONE NUMBER</label>
            <input placeholder="+92 345 6789123" />
          </div>
        </div>

        <div className="full">
          <label>Select Subject</label>
          <input placeholder="General Inquiry" />
        </div>

        <div className="full">
          <label>Your Message</label>
          <textarea placeholder="How can we help you?" />
        </div>

        <button className="send-btn">✈ Send Message</button>
      </div>

      {/* Footer */}
      <div className="footer">
         <span>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Contactinfo;