import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { getActions } from "./api/ZaderahServices/Zaderah";
import UmrahGuideImg from "./assets/UmrahGuide2.png";
import SaiAnimation from "./SaiAnimation";

const UmrahGuideandMap = () => {
  const navigate = useNavigate();

  const [actions, setActions] = useState([]);

  const [selectedLocation, setSelectedLocation] = useState(() => {
    return Number(localStorage.getItem("selectedUmrahLocation")) || 1;
  });

  /* =============================
     UMRAH IMAGE MARKER POSITIONS
  ============================== */

  const locations = [
    { id: 1, step: 1, name: "Meeqat", top: "33%", left: "7%" },
    { id: 2, step: 2, name: "Al-Masjid al-Haram", top: "33%", left: "38%" },
    { id: 8, step: 3, name: "Maqam Ibrahim", top: "33%", left: "68%" },
    { id: 9, step: 4, name: "Zamzam Place", top: "87%", left: "68%" },
    { id: 7, step: 5, name: "Safa Marwah", top: "87%", left: "38%" },
    { id: 10, step: 6, name: "Barber Shop", top: "87%", left: "7%" },
  ];
  const currentStep = locations.find(
    (x) => x.id === selectedLocation
  )?.step;
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
    localStorage.setItem(
      "selectedUmrahLocation",
      selectedLocation
    );
  }, [selectedLocation]);

  /* =============================
      LOCATION MAPPING
  ============================== */

  const getMappedLocationId = (locationName) => {
    switch (locationName) {
      case "Meeqat":
        return 1;

      case "Al-Masjid al-Haram":
        return 2;

      case "Safa Marwah":
        return 2;

      case "Maqam Ibrahim":
        return 2;

      case "Zamzam Place":
        return 2;

      case "Barber Shop":
        return 3;

      default:
        return null;
    }
  };

  /* =============================
      FILTER ACTIONS
  ============================== */

  const selectedLocationName = locations.find(
    (x) => x.id === selectedLocation
  )?.name;

  const mappedLocationID =
    getMappedLocationId(selectedLocationName);

  let filteredActions = actions.filter(
    (item) => item.locationID === mappedLocationID
  );

  if (selectedLocationName === "Safa Marwah") {
    filteredActions = filteredActions.filter((x) =>
      x.actionName
        ?.toLowerCase()
        ?.includes("safa")
    );
  }

  if (selectedLocationName === "Maqam Ibrahim") {
    filteredActions = filteredActions.filter(
      (x) =>
        x.actionName
          ?.toLowerCase()
          ?.includes("maqam") ||
        x.actionName
          ?.toLowerCase()
          ?.includes("ibrahim")
    );
  }

  if (selectedLocationName === "Zamzam Place") {
    filteredActions = filteredActions.filter((x) =>
      x.actionName
        ?.toLowerCase()
        ?.includes("zamzam")
    );
  }

  if (selectedLocationName === "Barber Shop") {
    filteredActions = filteredActions.filter(
      (x) =>
        x.actionName
          ?.toLowerCase()
          ?.includes("halq") ||
        x.actionName
          ?.toLowerCase()
          ?.includes("taqseer")
    );
  }

  return (
    <>
      <style>
        {`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
          font-family: sans-serif;
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

        /* =========================
              MAP SECTION
        ========================== */

        .map-section {
          flex: 3;
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: #fff;
          border: 1px solid #ddd;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-image {
          width: 100%;
          height: auto;
          display: block;
        }

        /* =========================
              MARKERS
        ========================== */

        .marker {
          position: absolute;

          width: 42px;
          height: 42px;

          border-radius: 50%;

          background: #9b5313;
          color: #fff;

          display: flex;
          align-items: center;
          justify-content: center;

          font-weight: 800;
          font-size: 18px;

          cursor: pointer;

          transform: translate(-50%, -50%);

          border: 3px solid white;

          transition: 0.2s;

          z-index: 20;

          box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
        }

        .marker:hover {
          transform: translate(-50%, -50%) scale(1.08);
        }

        .active-marker {
          background: #1a4f44;
        }

        /* =========================
          

        /* =========================
              ACTION SECTION
        ========================== */

        .action-section {
          flex: 1;
          background: white;
          border-radius: 14px;
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

          box-shadow:
            0px 4px 10px rgba(0,0,0,0.12);
        }

        .icon-box {
          width: 34px;
          height: 34px;

          border-radius: 8px;

          background: #9b5313;
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
          .done-marker {
  background: #2dbd4f;
}

.tick-icon {
  font-size: 20px;
  font-weight: 900;
  color: white;
}

        /* =========================
              MOBILE
        ========================== */

        @media (max-width: 768px) {

          html,
          body {
            overflow-y: auto;
            overflow-x: hidden;
          }

          .page-container {
            height: auto;
            min-height: 100vh;
            overflow: visible;
          }

          .route-container {
            flex-direction: column;
            overflow-y: auto;
            height: auto;
            padding-bottom: 30px;
          }

          .map-section {
            min-height: auto;
            width: 100%;
          }

          .map-image {
            width: 100%;
            height: auto;
          }

          .marker {
            width: 28px;
            height: 28px;
            font-size: 12px;
          }

          .runner-track {
            bottom: 9%;
            left: 35%;
            width: 30%;
          }

          .runner {
            font-size: 18px;
          }

          .action-section {
            max-height: unset;
          }
        }
      `}
      </style>

      <div className="page-container">
        <Header />

        <div className="route-container">

          {/* =========================
                MAP SECTION
          ========================== */}

          <div className="map-section">

            <img
              src={UmrahGuideImg}
              alt="Umrah Guide"
              className="map-image"
            />

            {/* SAFA MARWAH ANIMATION */}

            {/* {selectedLocationName === "Safa Marwah" && (
              <SaiAnimation />
            )} */}

            {/* MARKERS */}

            {locations.map((loc) => {
              const isDone = loc.step < currentStep;
              const isActive = loc.step === currentStep;

              return (
                <div
                  key={loc.id}
                  className={`marker 
        ${isActive ? "active-marker" : ""} 
        ${isDone ? "done-marker" : ""}
      `}
                  style={{ top: loc.top, left: loc.left }}
                  onClick={() => setSelectedLocation(loc.id)}
                >
                  {isDone ? (
                    <span className="tick-icon">✓</span>
                  ) : (
                    loc.step
                  )}
                </div>
              );
            })}
          </div>

          {/* =========================
                ACTION SECTION
          ========================== */}

          <div className="action-section">
            <h2 className="action-title">
              {selectedLocationName}
            </h2>

            {filteredActions?.map((action, index) => (
              <div
                key={action.actionID}
                className="action-card"
                onClick={() =>
                  navigate(
                    `/action-details/${action.actionID}/2`
                  )
                }
              >
                <div className="icon-box">
                  {index + 1}
                </div>

                <span className="action-name">
                  {action.actionName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UmrahGuideandMap;