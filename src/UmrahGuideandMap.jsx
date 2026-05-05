import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { getActions } from "./api/ZaderahServices/Zaderah";
import RouteImg from "./assets/UmrahGuide.png";

const UmrahGuideandMap = () => {
  const navigate = useNavigate();

  const [actions, setActions] = useState([]);
  const [selectedAction, setSelectedAction] = useState(null);

  const fetchActions = async () => {
    try {
      const response = await getActions();
      if (response?.length > 0) {
        setActions(response);

        const defaultAction = response.find(
          (item) => item.actionName === "Rami (Stoning the Jamarat)",
        );

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
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html, body {
            height: 100%;
            width: 100%;
          }

          .page-container {
            height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            background: #fcfdfd;
            overflow: hidden;
          }

          /* Header will take its own height */
          .route-container {
            flex: 1; /* remaining height */
            width: 100%;
            overflow: hidden;
            position: relative;
          }

          .map-section {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

            
          .map-image {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  object-position: center;
  display: block;
  background: #fcfdfd;
}

/* agar tum chaho desktop medium pe cover rahe */
@media (max-width: 1200px) {
  .map-image {
    object-fit: cover;
  }
}
        `}
      </style>

      <div className="page-container">
        <Header />

        <div className="route-container">
          <div className="map-section">
            <img src={RouteImg} alt="Map" className="map-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UmrahGuideandMap;
