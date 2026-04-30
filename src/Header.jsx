import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const brandGreen = "#0f4a36";

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Packages", path: "/hajj-packages" },
    { name: "CheckList", path: "/hajj-packing" },
    { name: "Profile", path: "/settings" },
  ];

  return (
    <>
      <style>{`
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
          cursor: pointer;
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

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>

      <header className="header-nav">
        <div className="brand-logo" onClick={() => navigate("/dashboard")}>
          ZADERAH
        </div>

        <nav className="nav-links">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </div>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
