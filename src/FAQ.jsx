import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function FQA() {
  const navigate = useNavigate();

  const data = [
    {
      q: "What is Hajj Guide?",
      a: "Hajj Guide is a mobile application that helps pilgrims perform Hajj and Umrah step-by-step with guidance, dua’s, rituals, and useful information.",
    },
    {
      q: "How do I change my Fiqa settings?",
      a: "Go to Settings → Fiqa Settings, then select your preferred Fiqa (Hanafi / Shafi etc.). The app will update guidance according to your selection.",
    },
    {
      q: "Can I use app offline?",
      a: "Yes, you can use most features offline once the data is downloaded. Some features like live updates may require internet connection.",
    },
    {
      q: "Is my personal data secure?",
      a: "Yes, your personal data is stored securely. We do not share your private information with anyone, and we use secure authentication to protect your account.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "600px",
              minHeight: "50vh",
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
              <h2
                style={{
                  marginTop: "12px",
                  fontSize: "22px",
                  fontWeight: "600",
                }}
              >
                Frequently Asked Questions
              </h2>

              <p style={{ marginTop: "5px", fontSize: "12px", opacity: "0.9" }}>
                Everything you need to know about HajjGuide
              </p>
            </div>

            {/* Body */}
            <div style={{ padding: "30px 35px" }}>
              {data.map((item, index) => (
                <div
                  key={index}
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: "14px 0",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleAnswer(index)}
                >
                  {/* Question Row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#0e4c45",
                        letterSpacing: "1px",
                      }}
                    >
                      {item.q}
                    </span>

                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#0f4c45",
                      }}
                    >
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {/* Answer */}
                  {openIndex === index && (
                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "13px",
                        color: "#555",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.a}
                    </p>
                  )}
                </div>
              ))}

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

export default FQA;
