import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

const typeDetailsData = {
  "HAJJ AL-QIRAN": {
    definition:
      "Performing Umrah and Hajj together in a single, continuous state of Ihram.",
    highlight: "Umrah and Hajj together",
    procedures: [
      "Enter Ihram at the Meeqat with the intention of both Umrah and Hajj.",
      "Perform Tawaf and Sa'i for Umrah immediately upon arrival in Makkah.",
      "Do NOT cut hair, shave, or exit the state of Ihram after completing Umrah.",
      "Remain in the state of Ihram until the completion of all Hajj rituals on the 10th of Dhul-Hijjah.",
      "An animal sacrifice (Hady) is mandatory for this type of pilgrimage.",
    ],
  },

  "HAJJ AL-IFRAD": {
    definition: "Performing Hajj alone without Umrah during the same journey.",
    highlight: "Hajj only",
    procedures: [
      "Enter Ihram at the Meeqat with the intention of Hajj only.",
      "Go directly to Makkah and perform Tawaf al-Qudum (arrival Tawaf).",
      "You may remain in Ihram until the completion of Hajj rituals.",
      "Perform Sa’i either after Tawaf al-Qudum or Tawaf al-Ifadah.",
      "No animal sacrifice (Hady) is required unless you choose to offer one.",
    ],
  },

  "HAJJ AT-TAMATTU": {
    definition:
      "Performing Umrah first, then exiting Ihram, and later entering Ihram again for Hajj.",
    highlight: "Umrah then Hajj",
    procedures: [
      "Enter Ihram at the Meeqat with the intention of Umrah only.",
      "Perform Tawaf and Sa’i for Umrah upon reaching Makkah.",
      "Cut hair/shave and exit Ihram after completing Umrah.",
      "On 8th Dhul-Hijjah, enter Ihram again with the intention of Hajj.",
      "An animal sacrifice (Hady) is mandatory for this type of pilgrimage.",
    ],
  },

  "UMRAH AL-MUFRADAH": {
    definition: "Performing Umrah alone, independent of Hajj.",
    highlight: "Umrah only",
    procedures: [
      "Enter Ihram at the Meeqat with the intention of Umrah.",
      "Perform Tawaf around the Kaaba (7 circuits).",
      "Perform Sa’i between Safa and Marwah (7 rounds).",
      "Cut hair or shave to exit Ihram.",
      "Complete Umrah and return to normal state.",
    ],
  },

  "UMRAH AL-TAMATTU": {
    definition:
      "Umrah performed during the Hajj months, followed by Hajj after exiting Ihram.",
    highlight: "Umrah during Hajj season",
    procedures: [
      "Enter Ihram with the intention of Umrah during the Hajj months.",
      "Perform Tawaf and Sa’i for Umrah.",
      "Cut hair/shave and exit Ihram.",
      "Wait until Hajj days and enter Ihram again for Hajj.",
      "This Umrah becomes part of Hajj Tamattu.",
    ],
  },

  "UMRAH AL-QIRAN": {
    definition:
      "Performing Umrah and Hajj together under a single Ihram (similar to Hajj Qiran).",
    highlight: "Umrah + Hajj in one Ihram",
    procedures: [
      "Enter Ihram with the intention of both Umrah and Hajj.",
      "Perform Tawaf and Sa’i for Umrah upon reaching Makkah.",
      "Do NOT cut hair or exit Ihram after Umrah.",
      "Remain in Ihram until Hajj rituals are completed.",
      "Animal sacrifice (Hady) is required.",
    ],
  },
};

const HajjandUmrahTypeDetails = () => {
  const navigate = useNavigate();

  const { title } = useParams();
  const selectedType = decodeURIComponent(title);

  const details = typeDetailsData[selectedType];

  if (!details) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>No Details Found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

          .page-container {
            font-family: 'Inter', sans-serif;
            background-color: #fcfdfd;
            min-height: 100vh;
          }

          .main-content {
            max-width: 1000px;
            margin: 0 auto;
            padding: 60px 20px;
          }

          .detail-card {
            border: 2px solid #1a4f44;
            border-radius: 20px;
            padding: 50px 70px;
            background: white;
          }

          .back-link {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 15px;
            font-weight: 600;
            color: #1a4f44;
            cursor: pointer;
            margin-bottom: 30px;
          }

          .back-icon {
            width: 20px;
            height: 20px;
            fill: #1a4f44;
          }

          .title {
            text-align: center;
            font-size: 45px;
            font-weight: 900;
            color: #1a4f44;
            margin-bottom: 30px;
          }

          .definition {
            font-size: 16px;
            color: #333;
            margin-bottom: 40px;
            line-height: 1.8;
          }

          .definition strong {
            font-weight: 800;
          }

          .highlight {
            background: #eaf1ef;
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 800;
          }

          .section-title {
            font-size: 30px;
            font-weight: 900;
            color: #1a4f44;
            margin-bottom: 15px;
          }

          .divider {
            height: 1px;
            background: #ddd;
            margin-bottom: 25px;
          }

          .procedure-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .procedure-item {
            display: flex;
            gap: 15px;
            align-items: flex-start;
            font-size: 16px;
            line-height: 1.6;
            color: #333;
          }

          .check-icon {
            width: 22px;
            height: 22px;
            fill: #1a4f44;
            flex-shrink: 0;
            margin-top: 2px;
          }

          @media(max-width: 768px) {
            .detail-card {
              padding: 30px 25px;
            }

            .title {
              font-size: 30px;
            }
          }
        `}
      </style>

      <div className="page-container">
        <Header p={1} />

        <main className="main-content">
          <div className="detail-card">
            {/* Back */}
            <div className="back-link" onClick={() => navigate(-1)}>
              <svg className="back-icon" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
              Back to Types
            </div>

            {/* Title */}
            <h1 className="title">{selectedType}</h1>

            {/* Definition */}
            <p className="definition">
              <strong>Definition:</strong> Performing{" "}
              <span className="highlight">{details.highlight}</span>{" "}
              {details.definition.replace(details.highlight, "")}
            </p>

            {/* Procedures */}
            <h2 className="section-title">Key Procedures:</h2>
            <div className="divider"></div>

            <div className="procedure-list">
              {details.procedures.map((item, index) => (
                <div className="procedure-item" key={index}>
                  <svg className="check-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.59L6.41 13 5 14.41 10 19.41 20 9.41 18.59 8 10 16.59z" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HajjandUmrahTypeDetails;
