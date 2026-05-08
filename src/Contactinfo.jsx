import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import Header from "./Header";
import { useSnackbar } from "notistack";

const Contactinfo = () => {
  const form = useRef();
  const { enqueueSnackbar } = useSnackbar()
  const [subject, setSubject] = useState("General Inquiry");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5m5no5p",
        "template_tt1ca13",
        form.current,
        "eybHzfrPZtEMA-Aov"
      )
      .then(
        (result) => {
          enqueueSnackbar("Message Sent Successfully", { variant: "success" });
          form.current.reset();
        },
        (error) => {
          enqueueSnackbar("Failed to Send Message ", { variant: "error" });
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <style>{`
       .contact-page {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7f7, #eef3f3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 12px;
  box-sizing: border-box;  overflow-y: auto;
}

.contact-wrapper {
  width: 100%;
  max-width: 720px;
  background: #ffffff;
  border-radius: 16px;
overflow: visible;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

/* HEADER */
.contact-header {
  background: linear-gradient(135deg, #0f4c45, #1b6b61);
  padding: 22px 16px;
  text-align: center;
  color: white;
}

.contact-header h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
}

.contact-header p {
  margin-top: 6px;
  font-size: 13px;
  opacity: 0.85;
}

/* CONTACT CARD */
.contact-card {
  margin: -15px auto 0;
  width: 92%;
  background: #ffffff;
  border-radius: 14px;
  padding: 14px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  border: 1px solid #eee;
}

.contact-card h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #0f4c45;
}

.email-box {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #444;
}

.icon {
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f4c45;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
}

/* FORM */
.form-container {
  padding: 20px;
}

/* GRID */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

/* INPUT GROUP */
.input-group {
  display: flex;
  flex-direction: column;
    text-align: left;
  gap: 5px;
  margin-bottom: 12px;  


}

.input-group label {
  font-size: 13px;
  font-weight: 700;
  color: #0f4c45;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 13px;
  outline: none;
  background: #fafafa;
  transition: 0.2s;
  box-sizing: border-box;
}

.input-group input:focus,
.input-group textarea:focus {
  border-color: #0f4c45;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(15, 76, 69, 0.12);
}

/* SUBJECT */
.subject {
  margin-top: 10px;
}

.subject label {
  font-size: 14px;
  font-weight: 700;
  color: #0f4c45;
  display: block;
  margin-bottom: 8px;  text-align: left;
}

/* RADIO GRID */
.radio-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #ddd;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  background: #fafafa;
  transition: 0.2s;
}

.radio-item:hover {
  border-color: #0f4c45;
  background: #f0f7f6;
}

.radio-item input {
  accent-color: #0f4c45;
}

.radio-item span {
  font-size: 13px;
  color: #333;
}

/* BUTTON */
.submit-btn {
  width: 100%;
  padding: 11px;
  border: none;
  border-radius: 10px;
  background: #0f4c45;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: 0.2s;
}

.submit-btn:hover {
  background: #0b3a34;
}

/* RESPONSIVE TABLET */
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .radio-group {
    grid-template-columns: 1fr;
  }

  .contact-header h2 {
    font-size: 20px;
  }
}

/* MOBILE SMALL */
@media (max-width: 480px) {
  .contact-wrapper {
    border-radius: 12px;  margin-bottom: 30px;
  }

  .form-container {
    padding: 15px;
  }

  .contact-card {
    padding: 12px;
  }

  .input-group input,
  .input-group textarea {
    font-size: 12px;
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

            {/* FORM */}
            <form ref={form} onSubmit={sendEmail} className="form-container">
              <div className="form-grid">
                <div className="input-group">
                  <label>First Name</label>
                  <input name="from_name" placeholder="John" required />
                </div>

                <div className="input-group">
                  <label>Last Name</label>
                  <input name="last_name" placeholder="Doe" required />
                </div>
              </div>

              <div className="input-group">
                <label>Email</label>
                <input name="email" placeholder="abc@gmail.com" required />
              </div>

              <div className="input-group">
                <label>Phone Number</label>
                <input name="phone" placeholder="+1 012 3456 789" required />
              </div>

              <div className="subject">
                <label>Select Subject</label>

                <div className="radio-group">
                  <label className="radio-item">
                    <input
                      type="radio"
                      name="subject"
                      value="General Inquiry"
                      checked={subject === "General Inquiry"}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <span>General Inquiry</span>
                  </label>

                  <label className="radio-item">
                    <input
                      type="radio"
                      name="subject"
                      value="Technical Issue"
                      checked={subject === "Technical Issue"}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <span>Technical Issue</span>
                  </label>

                  <label className="radio-item">
                    <input
                      type="radio"
                      name="subject"
                      value="Feedback"
                      checked={subject === "Feedback"}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <span>Feedback</span>
                  </label>

                  <label className="radio-item">
                    <input
                      type="radio"
                      name="subject"
                      value="Support"
                      checked={subject === "Support"}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <span>Support</span>
                  </label>
                </div>
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="2"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactinfo;
