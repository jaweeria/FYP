import React, { useEffect, useState } from "react";
import economyImg from "./assets/HAJJ ECONOMY PACKAGE.png";
import executiveImg from "./assets/HAJJ EXECUTIVE PACKAGE.png";
import premiumImg from "./assets/HAJJ PREMIUM PACKAGE.png";
import { GetPackages, getPackagesByType } from "./api/ZaderahServices/Zaderah";
import { enqueueSnackbar } from "notistack";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ClockIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="12px"
    width="12px"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color: "gray",
      marginRight: "4px",
      verticalAlign: "middle",
      marginBottom: "2px",
    }}
  >
    <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
  </svg>
);

const StarIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 576 512"
    height="12px"
    width="12px"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color: "gray",
      marginRight: "4px",
      marginLeft: "4px",
      verticalAlign: "middle",
      marginBottom: "2px",
    }}
  >
    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
  </svg>
);

function HajjPackages() {
  const [packagesList, setPackagesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();
  const navigate = useNavigate();

  const fetchPackages = async () => {
    //function bna lain jo b rkhna chain rkh skty hn fun ka name
    setLoading(true);

    try {
      let response;

      if (type) {
        response = await getPackagesByType(type);
      } else {
        response = await GetPackages();
      }

      console.log("RESPONSE:", response);

      if (response?.length > 0) {
        setPackagesList(response);
      } else {
        enqueueSnackbar("No packages found", { variant: "error" });
        setPackagesList([]);
      }
    } catch (err) {
      console.error(err);
      enqueueSnackbar("Error while fetching packages", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPackages();
  }, [type]);
  return (
    <>
      <style>{`
        .hajj-packages-wrapper {
          font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
          background-color: #fafafa;
          min-height: 100vh;
          padding-bottom: 50px;
        }

        .hp-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          padding: 60px 20px 20px;
        }

        .hp-container h1 {
          color: #123e38;
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }

        .hp-container > p {
          color: #666;
          font-size: 16px;
          margin-bottom: 50px;
        }

        .hp-cards {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .hp-card {
          width: 350px;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #123e38;
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .hp-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-bottom: 1px solid #123e38;
        }

        .hp-card-content {
          padding: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .hp-card-content h3 {
          margin: 0 0 10px 0;
          font-size: 16px;
          font-weight: 700;
          color: #222;
          letter-spacing: 0.5px;
        }

        .hp-price {
          color: #123e38;
          font-weight: 800;
          font-size: 24px;
          margin: 0 0 30px 0;
        }

        .hp-meta {
          color: #777;
          font-size: 13px;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          margin-top: auto;
        }

        .hp-meta span.dot {
          margin: 0 4px;
          color: #ccc;
        }

        .hp-card button {
          width: 100%;
          padding: 14px;
          background-color: #123e38;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          transition: background-color 0.2s ease;
        }

        .hp-card button:hover {
          background-color: #0c2b27;
        }
      `}</style>

      <div className="hajj-packages-wrapper">
        <div className="hp-container">
          <h1>
            {type === "hajj"
              ? "Hajj Packages"
              : type === "umrah"
                ? "Umrah Packages"
                : "Packges List"}
          </h1>
          <p>Explore our carefully curated pilgrimage plans for 2026</p>
          {loading ? (
            <p>Loading packages...</p>
          ) : (
            <div className="hp-cards">
              {packagesList?.map((pkg, index) => (
                <div className="hp-card" key={index}>
                  <img
                    src={
                      pkg.packageCategory === "Economy"
                        ? economyImg
                        : pkg.packageCategory === "Executive"
                          ? executiveImg
                          : premiumImg
                    }
                    alt={pkg.packageName}
                  />

                  <div className="hp-card-content">
                    <h3>{pkg.packageName}</h3>

                    <p className="hp-price">PKR {pkg.price.toLocaleString()}</p>

                    <div className="hp-meta">
                      <ClockIcon />
                      {pkg.durationDays} Days
                      <span className="dot">•</span>
                      <StarIcon />
                      {pkg.packageCategory}
                    </div>

                    <button
                      onClick={() => {
                        navigate(`/package-details/${pkg.packageID}`, {
                          state: { type },
                        });
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HajjPackages;
