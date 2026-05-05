import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => {
  const navigate = useNavigate();
  const brandGreen = "#0f4a36";

  const cards = [
    {
      title: "HAJJ PACKAGES",
      path: "/packages/hajj",
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill={brandGreen}>
          <path d="M19,5V19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13,7H11V9H13V7M13,11H11V13H13V11M13,15H11V17H13V15Z" />
        </svg>
      ),
    },
    {
      title: "UMRAH PACKAGES",
      path: "/packages/umrah",
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill={brandGreen}>
          <path d="M12,7V3H5V7H2V21H22V7H12M7,19H4V9H7V19M10,19H8V9H10V19M13,19H11V9H13V19M16,19H14V9H16V19M20,19H17V9H20V19Z" />
        </svg>
      ),
    },
    {
      title: "HAJJ GUIDE & MAP",
      path: "/guideandmap",
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill={brandGreen}>
          <path d="M15,19L9,16.89V5L15,7.11M20.5,3L15,5.1L9,3L3.5,5.1C3.17,5.21 3,5.5 3,5.83V20.33C3,20.45 3.05,20.57 3.12,20.66C3.21,20.77 3.35,20.83 3.5,20.83C3.61,20.83 3.72,20.79 3.82,20.75L9,18.9L15,21L20.5,18.9C20.83,18.79 21,18.5 21,18.17V3.67C21,3.42 20.88,3.2 20.7,3.08C20.63,3.03 20.56,3 20.5,3Z" />
        </svg>
      ),
    },
    {
      title: "UMRAH GUIDE & MAP",
      path: "/umrahguideandmap",
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill={brandGreen}>
          <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.58C22.35,21.61 22.4,21.62 22.5,21.62C22.75,21.62 23,21.37 23,21.12V6.5C21.4,5.31 19.15,5 17.5,5C15.8,5 13.35,5.65 12,6.5C10.55,5.4 8.45,5 6.5,5Z" />
        </svg>
      ),
    },
    {
      title: "DUA COLLECTION",
      path: "/hajj-duas",
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill={brandGreen}>
          <path d="M12.83,13.45L11.17,13.45L9.5,18L4.5,18L4.5,20L19.5,20L19.5,18L14.5,18L12.83,13.45M12,2L4.5,11L19.5,11L12,2Z" />
        </svg>
      ),
    },
    {
      title: "HAJJ TYPES",
      path: "/Type/hajj",
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill={brandGreen}>
          <path d="M7,5H21V7H7V5M7,11H21V13H7V11M7,17H21V19H7V17M3,5H5V7H3V5M3,11H5V13H3V11M3,17H5V19H3V17Z" />
        </svg>
      ),
    },
    {
      title: "UMRAH TYPES",
      path: "/Type/umrah",
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill={brandGreen}>
          <path d="M11,9H13V7H11V9M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
        </svg>
      ),
    },
    {
      title: "MY CHECKLIST",
      path: "/hajj-packing",
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill={brandGreen}>
          <path d="M7,5H21V7H7V5M7,11H21V13H7V11M7,17H21V19H7V17M3.5,6.25L2.25,5L1.5,5.75L3.5,7.75L7.5,3.75L6.75,3L3.5,6.25M3.5,12.25L2.25,11L1.5,11.75L3.5,13.75L7.5,9.75L6.75,9L3.5,12.25M3.5,18.25L2.25,17L1.5,17.75L3.5,19.75L7.5,15.75L6.75,15L3.5,18.25Z" />
        </svg>
      ),
    },
    {
      title: "TAWAF COUNTER",
      path: "/tawaf-rounds",
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill={brandGreen}>
          <path d="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15V18M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z" />
        </svg>
      ),
    },
    {
      title: "MASJID AL HARAM MAP",
      path: "/masjidharam-map",
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill={brandGreen}>
          <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .dashboard-container {
          padding: 20px 40px;
          background-color: #f7f9f8;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .header-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding: 10px 0;
        }

        .brand-logo {
          font-weight: 900;
          font-size: 24px;
          color: ${brandGreen};
          letter-spacing: 1px;
        }

        .nav-links {
          display: flex;
          border: 1.5px solid ${brandGreen};
          border-radius: 30px;
          padding: 5px;
          background: white;
        }

        .nav-item {
          padding: 8px 24px;
          font-size: 14px;
          font-weight: 500;
          color: #555;
          cursor: pointer;
          transition: 0.3s;
          border-right: 1px solid #e0e0e0;
        }
        
        .nav-item:last-child {
          border-right: none;
        }

        .nav-item.active {
          color: ${brandGreen};
          font-weight: 800;
        }

        .page-title {
          text-align: center;
          color: ${brandGreen};
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 50px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card-box {
          background: white;
          border: 1.5px solid ${brandGreen};
          border-radius: 12px;
          height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .card-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(15, 74, 54, 0.1);
        }

        .icon-wrapper {
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #eaf1ef;
          width: 55px;
          height: 55px;
          border-radius: 50%;
        }

        .card-label {
          font-size: 13px;
          font-weight: 800;
          color: ${brandGreen};
          letter-spacing: 0.5px;
          text-align: center;
        }
      `}</style>

      <div className="dashboard-container">
        <Header />

        <h1 className="page-title">Your Pilgrimage Dashboard</h1>

        <main className="cards-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card-box"
              onClick={() => navigate(card.path)}
            >
              <div className="icon-wrapper">{card.icon}</div>
              <div className="card-label">{card.title}</div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
