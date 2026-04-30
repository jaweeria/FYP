import React from "react";
import mapImage from "./assets/MasjidHaramMap.jpeg"; // apni image path adjust karo

function MasjidHaramMap() {
  return (
    <>
      <style>{`    html, body {
          margin: 0;
          padding: 0;
          overflow: hidden; 
        }
        .map-container {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
        }

        .map-image {
          width: 100%;
          height: 100%;
          object-fit: contain; /* image distort nahi hogi */
        }
      `}</style>

      <div className="map-container">
        <img src={mapImage} alt="Masjid Al Haram Map" className="map-image" />
      </div>
    </>
  );
}

export default MasjidHaramMap;
