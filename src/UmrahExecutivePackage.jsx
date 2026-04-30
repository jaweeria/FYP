import React from "react";
import { useNavigate } from "react-router-dom";
import { getPackagesByType } from "./api/ZaderahServices/Zaderah";
import Header from "./Header";

const ClockIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="16px"
    width="16px"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color: "#0f4a36",
      marginRight: "10px",
      verticalAlign: "middle",
      marginBottom: "2px",
    }}
  >
    <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
  </svg>
);

const TagIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="16px"
    width="16px"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color: "#0f4a36",
      marginRight: "10px",
      verticalAlign: "middle",
      marginBottom: "2px",
    }}
  >
    <path d="M435.25 48h-122.9c-14.3 0-28 5.7-38.1 15.8L13.8 324.3c-18.4 18.4-18.4 48.2 0 66.6l107.3 107.3c18.4 18.4 48.2 18.4 66.6 0l260.5-260.5c10.1-10.1 15.8-23.8 15.8-38.1V76c0-15.5-12.5-28-28-28zm-65.3 125.3c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height="14px"
    width="14px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
  </svg>
);

const UmrahExecutivePackage = () => {
  const brandGreen = "#0f4a36";
  const navigate = useNavigate();
  const [packagesList, setPackagesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchPackagesByType = async () => {
    setLoading(true);

    try {
      const response = await getPackagesByType("Umrah");

      console.log("PACKAGES RESPONSE:", response);

      if (response) {
        setPackagesList(response);
      } else {
        enqueueSnackbar("No packages Umrah found", { variant: "error" });
      }
    } catch (err) {
      console.error(err);
      enqueueSnackbar("Error while fetching Umrah packages", {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPackagesByType();
  }, []);
  return (
    <>
      <style>{`
        .details-page-wrapper {
          padding: 20px 40px;
          background-color: #f7f9f8;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Navbar Styling Reused from Dashboard */
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

        /* Card Styling */
        .package-details-card {
          max-width: 800px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1.5px solid ${brandGreen};
          border-radius: 16px;
          padding: 50px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }

        .badge-pill {
          display: inline-block;
          background-color: #eaf1ef;
          color: ${brandGreen};
          font-size: 11px;
          font-weight: 800;
          padding: 6px 14px;
          border-radius: 20px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .pkg-title {
          font-size: 32px;
          font-weight: 800;
          color: ${brandGreen};
          margin: 0 0 10px 0;
        }

        .pkg-price {
          font-size: 24px;
          font-weight: 800;
          color: #000;
          margin: 0 0 35px 0;
        }

        .info-row {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-size: 15px;
          color: #444;
        }

        .info-label {
          font-weight: 700;
          color: ${brandGreen};
          margin-right: 5px;
        }

        .info-value {
          color: #555;
        }

        .divider {
          border: none;
          border-top: 1px solid #eaeaea;
          margin: 35px 0;
        }

        .desc-title {
          font-size: 16px;
          font-weight: 800;
          color: ${brandGreen};
          margin: 0 0 15px 0;
        }

        .desc-text {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0 0 40px 0;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: transparent;
          border: 1.5px solid ${brandGreen};
          color: ${brandGreen};
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .back-btn:hover {
          background-color: #f0f5f3;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .package-details-card {
            padding: 30px;
          }
          .pkg-title {
            font-size: 26px;
          }
        }
      `}</style>

      <div className="details-page-wrapper">
        <Header />

        <div className="package-details-card">
          <div className="badge-pill">Executive</div>

          <h1 className="pkg-title">Umrah Executive Package</h1>
          <p className="pkg-price">PKR 350,000</p>

          <div className="info-row">
            <ClockIcon />
            <span className="info-label">Duration:</span>
            <span className="info-value">7 Days</span>
          </div>

          <div className="info-row">
            <TagIcon />
            <span className="info-label">Category:</span>
            <span className="info-value">Executive</span>
          </div>

          <hr className="divider" />

          <h2 className="desc-title">Package Description</h2>
          <p className="desc-text">
            Comfortable Umrah package including air-conditioned transport,
            4-star stay at Al-Madina Inn, guided rituals, meals, and additional
            facilities.
          </p>

          <button className="back-btn">
            <ArrowLeftIcon /> Back to Packages
          </button>
        </div>
      </div>
    </>
  );
};

export default UmrahExecutivePackage;
