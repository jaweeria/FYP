import React from "react";
import {
  UserIcon,
  LockClosedIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/16/solid";
// import { UserIcon } from "@heroicons/react/16/solid";

const Settings = () => {
  return (
    <>
      <style>{`
        .settings-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f5f7f6;
        }

        .settings-card {
          width: 420px;
          background: #ffffff;
          padding: 30px 25px;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }

        .settings-card h1 {
          font-size: 26px;
          margin-bottom: 20px;
          color: #1f3d34;
        }

        .section-title {
          font-size: 12px;
          color: #6b7c75;
          font-weight: 600;
          margin: 18px 0 10px;
        }

        .setting-item {
          display: flex;
          align-items: center;
          padding: 12px 10px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s;
        }

        .setting-item:hover {
          background-color: #f1f5f4;
        }

        .icon {
          width: 38px;
          height: 38px;
          background-color: #2f6f5e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
        }

        .icon svg {
          width: 20px;
          height: 20px;
          fill: white;   /* 🔥 FIX: use fill instead of color */
        }

        .setting-item span {
          flex: 1;
          font-size: 14px;
          color: #2f3e39;
        }

        .arrow {
          font-size: 18px;
          color: #9aa5a0;
        }
      `}</style>

      <div className="settings-container">
        <div className="settings-card">
          <h1>Settings</h1>

          <p className="section-title">ACCOUNT SETTINGS</p>

          <div className="setting-item">
            <div className="icon">
              <UserIcon />
            </div>
            <span>Profile Information</span>
            <span className="arrow">›</span>
          </div>

          <div className="setting-item">
            <div className="icon">
              <LockClosedIcon />
            </div>
            <span>Change Password</span>
            <span className="arrow">›</span>
          </div>

          <p className="section-title">USER SUPPORT</p>

          <div className="setting-item">
            <div className="icon">
              <QuestionMarkCircleIcon />
            </div>
            <span>FAQ</span>
            <span className="arrow">›</span>
          </div>

          <div className="setting-item">
            <div className="icon">
              <EnvelopeIcon />
            </div>
            <span>Contact Us (Email)</span>
            <span className="arrow">›</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
