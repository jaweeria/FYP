import React, { useState } from "react";
import "./App.css";

function HajjPacking() {
  const [progress, setProgress] = useState(0);

  const travelDocs = [
    "Passport & Original CNIC",
    "Flight Tickets & Visa Copy",
    "Hotel Booking Vouchers",
  ];

  const religiousEssentials = [
    "Two Sets of Ihram (For Men)",
    "Pocket Quran & Dua Book",
  ];

  return (
    <div className="packing-container">
      <h2 className="title">Essential Checklist - ZADERAH</h2>

      <div className="progress-bar">
        <label className="progress-label">Packing Progress</label>
        <div className="bar">
          <div className="fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">{progress}%</p>
      </div>

      <div className="section">
        <h3>TRAVEL DOCUMENTS</h3>
        <ul>
          {travelDocs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>RELIGIOUS ESSENTIALS</h3>
        <ul>
          {religiousEssentials.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HajjPacking;
