import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Profile() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: " #fcfdfd",
          overflow: "hidden",
        }}
      >
        <Header p={1} />
        <div
          style={{
            background: "#f5f7f7",
            minHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "600px",
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "#0f4c45",
                color: "#fff",
                textAlign: "center",
                padding: "40px 20px 30px",
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background: "#fff",
                  color: "#0f4c45",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "36px",
                  fontWeight: "600",
                  margin: "0 auto",
                }}
              >
                {userData?.profilePic ? (
                  <img
                    src={userData.profilePic}
                    alt="profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span
                    style={{
                      fontSize: "36px",
                      fontWeight: "600",
                      color: "#0f4c45",
                    }}
                  >
                    {userData?.fullName?.charAt(0)?.toUpperCase() || "U"}
                  </span>
                )}
              </div>

              <h2
                style={{
                  marginTop: "12px",
                  fontSize: "22px",
                  fontWeight: "600",
                }}
              >
                {userData?.fullName}
              </h2>

              <p style={{ marginTop: "5px", fontSize: "14px", opacity: "0.9" }}>
                {userData?.email}
              </p>
            </div>

            {/* Body */}
            <div style={{ padding: "30px 35px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "22px",
                    background: "#0f4c45",
                    marginRight: "10px",
                  }}
                ></div>
                <h3
                  style={{
                    color: "#0f4c45",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Account Information
                </h3>
              </div>

              {/* Rows */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: " #139776",
                    fontWeight: "500",
                    letterSpacing: "1px",
                  }}
                >
                  FULL NAME
                </span>
                <span
                  style={{ fontSize: "14px", fontWeight: "500", color: "#333" }}
                >
                  {userData?.fullName}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: " #139776",
                    fontWeight: "500",
                    letterSpacing: "1px",
                  }}
                >
                  PHONE NUMBER
                </span>
                <span
                  style={{ fontSize: "14px", fontWeight: "500", color: "#333" }}
                >
                  {userData?.phone}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: " #139776",
                    letterSpacing: "1px",
                    fontWeight: 600,
                  }}
                >
                  EMAIL
                </span>
                <span
                  style={{ fontSize: "14px", fontWeight: "500", color: "#333" }}
                >
                  {userData?.email}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: " #139776",
                    fontWeight: "500",
                    letterSpacing: "1px",
                  }}
                >
                  SECURITY STATUS
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#0f4c45",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "#0f4c45",
                      borderRadius: "50%",
                    }}
                  ></span>
                  Password Protected
                </span>
              </div>

              {/* Button */}
              <div style={{ textAlign: "center", marginTop: "25px" }}>
                <button
                  style={{
                    background: "#0f4c45",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/settings")}
                >
                  ← Back to Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
