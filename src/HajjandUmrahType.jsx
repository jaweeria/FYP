import React from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

const HajjandUmrahType = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    window.history.back();
  };
  const { type } = useParams();
  const handleTypeClick = (title) => {
    debugger;
    navigate(`/type-details/${encodeURIComponent(title)}`);
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

          .page-container {
            font-family: 'Inter', sans-serif;
            background-color: #fcfdfd;
            min-height: 100vh;
            color: #333;
          }

          .main-content {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 20px;
            text-align: center;
            position: relative;
          }

          .back-btn {
            position: absolute;
            left: 0;
            top: 70px;
            background: none;
            border: none;
            cursor: pointer;
          }

          .back-icon {
            width: 30px;
            height: 30px;
            fill: #1a4f44;
          }

          .page-title {
            font-size: 40px;
            font-weight: 900;
            color: #1a4f44;
            margin-bottom: 60px;
            letter-spacing: 1px;
          }

          .btn-list {
            display: flex;
            flex-direction: column;
            gap: 25px;
            align-items: center;
          }

          .type-btn {
            width: 600px;
            border: 2px solid #1a4f44;
            background: white;
            padding: 22px;
            border-radius: 14px;
            font-size: 22px;
            font-weight: 900;
            color: #1a4f44;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            letter-spacing: 1px;
          }

          .type-btn:hover {
            background: #1a4f44;
            color: white;
          }

          @media (max-width: 768px) {
            .type-btn {
              width: 100%;
              font-size: 18px;
            }

            .page-title {
              font-size: 30px;
            }
          }
        `}
      </style>
      <div className="page-container">
        <Header p={1} />

        <main className="main-content">
          <h1 className="page-title">
            {type === "hajj" ? "TYPES OF HAJJ" : "TYPES OF UMRAH"}
          </h1>

          {type === "hajj" ? (
            <div className="btn-list">
              <button
                className="type-btn"
                onClick={() => handleTypeClick("HAJJ AL-QIRAN")}
              >
                HAJJ AL-QIRAN
              </button>

              <button
                className="type-btn"
                onClick={() => handleTypeClick("HAJJ AL-IFRAD")}
              >
                HAJJ AL-IFRAD
              </button>

              <button
                className="type-btn"
                onClick={() => handleTypeClick("HAJJ AT-TAMATTU")}
              >
                HAJJ AT-TAMATTU
              </button>
            </div>
          ) : (
            <div className="btn-list">
              <button
                className="type-btn"
                onClick={() => handleTypeClick("UMRAH AL-MUFRADAH")}
              >
                UMRAH AL-MUFRADAH
              </button>

              <button
                className="type-btn"
                onClick={() => handleTypeClick("UMRAH AL-TAMATTU")}
              >
                UMRAH AL-TAMATTU
              </button>

              <button
                className="type-btn"
                onClick={() => handleTypeClick("UMRAH AL-QIRAN")}
              >
                UMRAH AL-QIRAN
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default HajjandUmrahType;
