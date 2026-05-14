import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { getActions } from "./api/ZaderahServices/Zaderah";
import HajjRouteImg from "./assets/HajjGuide1.png";

const DemoHajjGuide = () => {
  const navigate = useNavigate();

  const [actions, setActions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(() => {
    return Number(localStorage.getItem("selectedLocation")) || 1;
  });
  // Marker positions on image
  const locations = [
    { id: 1, name: "Meeqat", top: "12%", left: "18%" }, // 1
    { id: 2, name: "Al-Masjid al-Haram", top: "42%", left: "15%" }, // 2
    { id: 7, name: "Safa Marwah", top: "20%", left: "45%" }, // 3
    { id: 3, name: "Mina", top: "38%", left: "55%" }, // 4
    { id: 4, name: "Plains of Arafat", top: "72%", left: "82%" }, // 5
    { id: 5, name: "Muzdalifah", top: "62%", left: "52%" }, // 6
    { id: 6, name: "Jamarah", top: "48%", left: "35%" }, // 7
  ];

  const fetchActions = async () => {
    try {
      const response = await getActions();

      if (response?.length > 0) {
        setActions(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchActions();
  }, []);
  useEffect(() => {
    localStorage.setItem("selectedLocation", selectedLocation);
  }, [selectedLocation]);
  // Filter actions by selected location
  const filteredActions = actions.filter(
    (item) => item.locationID === selectedLocation,
  );
  const uniqueActions =
    // Array.from(
    //   new Map(
    filteredActions
  // .map((item) => [item.actionName + item.locationID, item]),
  //   ).values(),
  // );
  return (
    <>
      <style>
        {`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
        }

        .page-container {
          height: 100vh;
          overflow: hidden;
          background: #fcfdfd;
        }

        .route-container {
          display: flex;
          gap: 20px;
          padding: 20px;
          height: calc(100vh - 90px);
        }

        .map-section {
          flex: 3;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          border: 1px solid #ddd;
        }

        .map-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .marker {
          position: absolute;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #000;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          cursor: pointer;
          transform: translate(-50%, -50%);
          border: 3px solid white;
          transition: 0.2s;
        }

        .marker:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }

        .active-marker {
          background: #1a4f44;
        }

     .action-section {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 18px;
  overflow-y: auto;
  border: 1px solid #ddd;
}

.action-title {
  font-size: 22px;
  font-weight: 800;
  color: #1a4f44;
  margin-bottom: 18px;
}

.action-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e6e6e6;
  background: #fff;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: 0.2s;
  margin-bottom: 12px;
}

.action-card:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 10px rgba(0,0,0,0.12);
}

.icon-box {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: #1a4f44;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.action-name {
  font-size: 14px;
  font-weight: 700;
  color: #333;

        }
      `}
      </style>

      <div className="page-container">
        <Header />

        <div className="route-container">
          {/* MAP SECTION */}
          <div className="map-section">
            <img src={HajjRouteImg} alt="Hajj Route" className="map-image" />

            {/* Markers */}
            {locations.map((loc, index) => (
              <div
                key={loc.id}
                className={`marker ${selectedLocation === loc.id ? "active-marker" : ""
                  }`}
                style={{
                  top: loc.top,
                  left: loc.left,
                }}
                onClick={() => setSelectedLocation(loc.id)}
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="action-section">
            <h2 className="action-title">
              {locations.find((x) => x.id === selectedLocation)?.name}
            </h2>

            {uniqueActions?.map((action, index) => (
              <div
                key={action.actionID}
                className="action-card"
                onClick={() => navigate(`/action-details/${action.actionID}/1`)}
              >
                <div className="icon-box">{index + 1}</div>

                <span className="action-name">{action.actionName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoHajjGuide;
