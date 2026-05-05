import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { getActions } from "./api/ZaderahServices/Zaderah";
import HajjRouteImg from "./assets/HajjRoutes.jpeg.jpeg";
const HajjGuideandMap = () => {
  const navigate = useNavigate();

  const [actions, setActions] = useState([]);
  const [selectedAction, setSelectedAction] = useState(null);
  const [fiqhId, setFiqhId] = useState("");
  const [ritualId, setRitualId] = useState("");
  const fetchActions = async () => {
    try {
      const response = await getActions();
      if (response?.length > 0) {
        console.log("resp", response);
        setActions(response);
        // find specific action by name
        const defaultAction = response.find(
          (item) => item.actionName === "Rami (Stoning the Jamarat)",
        );

        // agar mil jaye to wahi set karo warna first one
        setSelectedAction(defaultAction || response[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchActions();
  }, []);

  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden; /* FULL PAGE SCROLL OFF */
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
            background: #fcfdfd;

            height: calc(100vh - 90px); /* header approx height */
            overflow: hidden; /* container scroll off */
          }

          .map-section {
            flex: 3;
            border-radius: 12px;
            overflow: hidden;
            background: #fff;
            border: 1px solid #ddd;
            height: 100%;
          }

          .map-image {
            width: 100%;
            height: 100%;
            object-fit: contain; /* image crop nahi hogi */
            display: block;
          }

   

          .icon-box {
            width: 35px;
            height: 35px;
            border-radius: 6px;
            background: #1a4f44;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
          }

          .icon-box svg {
            fill: white;
            width: 18px;
            height: 18px;
          }

          /* Responsive for Mobile */
          @media (max-width: 992px) {
            html, body {
              overflow: auto; /* mobile pe allow scroll */
            }

            .page-container {
              overflow: auto;
              height: auto;
            }

            .route-container {
              flex-direction: column;
              height: auto;
              overflow: auto;
            }

            .map-section {
              height: 320px;
            }

            .action-section {
              height: auto;
              max-height: 400px;
            }
          }
.action-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e6e6e6;
  background: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.2s;
}

.action-card:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
}

.action-name {
  font-size: 14px;
  font-weight: 700;
  color: #333;
}.action-title {
  font-size: 22px;
  font-weight: 800;
  color: #1a4f44;
  margin-bottom: 18px;
}
        `}
      </style>

      <div className="page-container">
        <Header />

        <div className="route-container">
          {/* LEFT MAP SECTION */}
          <div className="map-section">
            <img src={HajjRouteImg} alt="Map" className="map-image" />
          </div>

          {/* RIGHT ACTIONS SECTION */}
          <div className="action-section">
            <h2 className="action-title">Actions</h2>

            {selectedAction && (
              <div
                className="action-card"
                onClick={() =>
                  navigate(`/action-details/${selectedAction.actionID}`)
                }
              >
                <div className="icon-box">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
                  </svg>
                </div>

                <span className="action-name">{selectedAction.actionName}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HajjGuideandMap;
