import React from "react";
import "./App.css";
import Header from "./Header";

const Contactinfo = () => {
  return (
    <>
      <style>{`
        .contact-page {
          width: 100%;
          min-height: 50vh;
          background: linear-gradient(135deg, #f5f7f7, #eef3f3);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 15px;
        }

        .contact-wrapper {
          width: 700px;
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(0,0,0,0.12);
        }

        /* Header */
        .contact-header {
          background: linear-gradient(135deg, #0f4c45, #1b6b61);
          padding: 45px 30px;
          text-align: center;
          color: white;
        }

        .contact-header h2 {
          margin: 0;
          font-size: 26px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .contact-header p {
          margin-top: 10px;
          font-size: 14px;
          color: rgba(255,255,255,0.85);
        }

        /* Contact Card */
        .contact-card {
          margin: -25px auto 0;
          width: 88%;
          background: #ffffff;
          border-radius: 16px;
          padding: 22px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.10);
          border: 1px solid #eee;
        }

        .contact-card h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          color: #0f4c45;
        }

        .email-box {
          margin-top: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: #444;
        }

        .icon {
          width: 38px;
          height: 38px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0f4c45;
          border-radius: 50%;
          color: #fff;
          font-weight: 700;
          font-size: 16px;
        }

        /* Form */
        .form-container {
          padding: 35px 40px 30px;
          text-align: left;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          width: 100%;
        }

        .input-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
          align-items: flex-start;
        }

        .input-group label {
          font-size: 13px;
          font-weight: 600;
          color: #0f4c45;
          width: 100%;
          text-align: left;
        }

        .input-group input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #ddd;
          font-size: 14px;
          outline: none;
          transition: 0.2s ease-in-out;
          background: #fafafa;
          box-sizing: border-box;
        }

        .input-group input:focus {
          border-color: #0f4c45;
          box-shadow: 0 0 0 3px rgba(15, 76, 69, 0.15);
          background: white;
        }

        /* Subject */
        .subject {
          margin-top: 15px;
          width: 100%;
        }

        .subject label {
          font-weight: 700;
          color: #0f4c45;
          font-size: 14px;
          display: block;
          text-align: left;
        }

        .radio-group {
          margin-top: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          width: 100%;
        }

        .radio-item {
          width: 100%;
          border: 1px solid #ddd;
          padding: 10px 12px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: 0.2s;
          background: #fafafa;
          box-sizing: border-box;
        }

        .radio-item:hover {
          border-color: #0f4c45;
          background: #f0f7f6;
        }

        .radio-item input {
          accent-color: #0f4c45;
        }

        .radio-item span {
          font-size: 14px;
          color: #333;
        }

        /* Button */
        .submit-btn {
          width: 100%;
          padding: 13px;
          border: none;
          border-radius: 12px;
          background: #0f4c45;
          color: white;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 22px;
          transition: 0.2s;
        }

        .submit-btn:hover {
          background: #0b3a34;
        }

        /* Responsive */
        @media (max-width: 650px) {
          .contact-wrapper {
            width: 100%;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .radio-group {
            grid-template-columns: 1fr;
          }

          .form-container {
            padding: 25px 20px;
          }
        }
      `}</style>

      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#fcfdfd",
          overflow: "hidden",
        }}
      >
        <Header p={1} />

        <div className="contact-page">
          <div className="contact-wrapper">
            <div className="contact-header">
              <h2>CONTACT US</h2>
              <p>Any question or remarks? Just write us a message!</p>
            </div>

            <div className="contact-card">
              <h3>Contact Information</h3>
              <div className="email-box">
                <span className="icon">@</span>
                <p style={{ margin: 0, fontWeight: "600" }}>
                  ZadERah@gmail.com
                </p>
              </div>
            </div>

            <div className="form-container">
              <div className="form-grid">
                <div className="input-group">
                  <label>First Name</label>
                  <input placeholder="John" />
                </div>

                <div className="input-group">
                  <label>Last Name</label>
                  <input placeholder="Doe" />
                </div>
              </div>

              <div className="input-group">
                <label>Email</label>
                <input placeholder="abc@gmail.com" />
              </div>

              <div className="input-group">
                <label>Phone Number</label>
                <input placeholder="+1 012 3456 789" />
              </div>

              <div className="subject">
                <label>Select Subject</label>

                <div className="radio-group">
                  <label className="radio-item">
                    <input type="radio" name="subject" defaultChecked />
                    <span>General Inquiry</span>
                  </label>

                  <label className="radio-item">
                    <input type="radio" name="subject" />
                    <span>Technical Issue</span>
                  </label>

                  <label className="radio-item">
                    <input type="radio" name="subject" />
                    <span>Feedback</span>
                  </label>

                  <label className="radio-item">
                    <input type="radio" name="subject" />
                    <span>Support</span>
                  </label>
                </div>
              </div>

              <button className="submit-btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactinfo;
