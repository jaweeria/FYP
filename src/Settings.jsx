import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UserIcon,
  LockClosedIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import Header from "./Header";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Inter, sans-serif;
          background: #f4f6f5;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 40px;
        }

        .logo {
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 2px;
          color: #0f3d2e;
        }

        .menu {
          display: flex;
          border: 1px solid #0f3d2e;
          border-radius: 30px;
          padding: 4px;
          gap: 2px;
        }

        .menu span {
          padding: 6px 16px;
          font-size: 13px;
          border-radius: 20px;
          cursor: pointer;
          color: #0f3d2e;
        }

        .menu .active {
          background: #0f3d2e;
          color: #fff;
        }

        /* CENTER */
        .wrapper {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .card {
          width: 500px;
          background: #fff;
          border-radius: 16px;
          padding: 26px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }

        h1 {
          margin: 0 0 18px;
          font-size: 24px;
          font-weight: 700;
          color: #0f3d2e;
        }

        .section {
          margin-top: 18px;
        }

        .section-title {
          font-size: 11px;
          font-weight: 700;
          color: #6b7c75;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        /* ITEM */
        .item {
          display: flex;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid #e9eeec;
          cursor: pointer;
        }

        .item:last-child {
          border-bottom: none;
        }

        .icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #4f9d8a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 14px;
        }

        .icon svg {
          width: 18px;
          height: 18px;
          fill: #fff;
        }

        .text {
          flex: 1;
          font-size: 14px;
          color: #2c3e38;
          font-weight: 500;
        }

        .arrow {
          font-size: 18px;
          color: #9aa5a0;
          font-weight: 500;
        }

        /* LOGOUT */
        .logout .icon {
          background: #e74c3c;
        }

        .logout .text {
          color: #e74c3c;
        }

      `}</style>

      {/* NAVBAR */}
      <Header />

      {/* CARD */}
      <div className="wrapper">
        <div className="card">
          <h1>Settings</h1>

          {/* ACCOUNT */}
          <div className="section">
            <div className="section-title">ACCOUNT SETTINGS</div>

            <div className="item" onClick={() => navigate("/profile")}>
              <div className="icon">
                <UserIcon />
              </div>
              <div className="text">Profile Information</div>
              <div className="arrow">&gt;</div>
            </div>

            <div className="item">
              <div className="icon">
                <LockClosedIcon />
              </div>
              <div className="text">Change Password</div>
              <div className="arrow">&gt;</div>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="section">
            <div className="section-title">USER SUPPORT</div>

            <div className="item">
              <div className="icon">
                <QuestionMarkCircleIcon />
              </div>
              <div className="text">FAQ</div>
              <div className="arrow">&gt;</div>
            </div>

            <div className="item">
              <div className="icon">
                <EnvelopeIcon />
              </div>
              <div className="text">Contact Us (Email)</div>
              <div className="arrow">&gt;</div>
            </div>
          </div>

          {/* DANGER */}
          <div className="section">
            <div className="section-title">DANGER ZONE</div>

            <div className="item logout">
              <div className="icon">
                <span style={{ color: "#fff", fontWeight: "bold" }}>⎋</span>
              </div>
              <div className="text">Logout</div>
              <div className="arrow" style={{ color: "#e74c3c" }}>
                &gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
