import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams, useNavigate } from "react-router-dom";
import { getActionswithIds, getComment, PostComment } from "./api/ZaderahServices/Zaderah";
import CustomSnackbar from "./CustomSnackbar";
import Comment from "./Comment";

const ActionDetails = () => {
  const navigate = useNavigate();
  const { actionId, ritualId } = useParams();
  const [details, setDetails] = useState(null);
  const [activeTab, setActiveTab] = useState("Duas");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = userData?.userID
  const fiqahId = userData?.fiqhID;
  const [comments, setComments] = useState([]);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [message, setMessage] = useState("")
  const fetchDetails = async () => {
    debugger;
    try {
      const response = await getActionswithIds(actionId, fiqahId, ritualId);
      setDetails(response);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUserComments = async () => {
    try {
      const response = await getComment(userData?.userID);

      const filtered = response?.filter(
        (c) => c.actionID === Number(actionId)
      );

      if (filtered?.length > 0) {
        setComments(filtered);

        // Snackbar show
        setSnackbarMsg(filtered[0]?.commentText);
        setSnackbarOpen(true);

      } else {
        setComments([]);

        setSnackbarMsg("No comments for this action");
        setSnackbarOpen(true);
      }
    } catch (err) {
      console.log(err);

      setSnackbarMsg("Error fetching comments");
      setSnackbarOpen(true);
    }
  };
  useEffect(() => {
    fetchDetails();
    fetchUserComments()
  }, []);
  const handleAddReminder = async () => {
    const payload = {
      userID: userId,
      commentText: message,
      actionID: actionId
    }
    try {
      const response = await PostComment(payload)
    } catch (error) {

    }
  }
  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            background: #f8fbfa;
          }

          .details-container {
            padding: 25px 40px;
          }

          .back-link {
            font-size: 13px;
            font-weight: 600;
            color: #666;
            cursor: pointer;
            margin-bottom: 12px;
            display: inline-block;
          }

        .step-card {
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e6e6e6;
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.05);

  border-left: 6px solid #1a4f44;   
}
          .step-left {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .step-label {
            font-size: 12px;
            font-weight: 700;
            color: #888;
            text-transform: uppercase;
          }

          .step-title {
            font-size: 22px;
            font-weight: 800;
            color: #1a4f44;
            margin: 0;
          }

      .step-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 7px;
  border: 1px solid #cfe4de;
  background: #f1faf7;
  font-weight: 700;
  color: #1a4f44;
  width: fit-content;
}

.tag-icon {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #1a4f44;
  color: white;
  font-size: 11px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

          .completed-btn {
            background: #f3f3f3;
            border: none;
            border-radius: 20px;
            padding: 8px 18px;
            font-size: 13px;
            font-weight: 700;
            color: #666;
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .completed-dot {
            width: 10px;
            height: 10px;
            background: #888;
            border-radius: 50%;
          }

          .tabs {
            margin-top: 18px;
            display: flex;
            gap: 12px;
          }

          .tab {
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 700;
            border: 1px solid transparent;
            cursor: pointer;
            background: transparent;
            color: #444;
          }

          .tab.active {
            background: #1a4f44;
            color: white;
          }

          .content-box {
            margin-top: 15px;
            background: #fff;
            border-radius: 14px;
            border: 1px solid #e6e6e6;
            padding: 22px;
            min-height: 200px;
            box-shadow: 0px 2px 8px rgba(0,0,0,0.05);
          }

          .content-title {
            font-size: 14px;
            font-weight: 800;
            color: #1a4f44;
            margin-bottom: 18px;
          }

          .dua-arabic {
            font-size: 20px;
            font-weight: 700;
            text-align: right;
            color: #333;
          }

          .dua-english {
            margin-top: 14px;
            font-size: 14px;
            font-weight: 600;
            color: #444;
          }

          .loading-text {
            font-size: 14px;
            font-weight: 700;
            color: #666;
          }
            .action-btns {
  display: flex;
  gap: 10px;
}

.reminder-btn {
  background: #1a4f44;
  border: none;
  border-radius: 20px;
  padding: 8px 18px;
  font-size: 13px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

.reminder-btn:hover {
  background: #133a32;
}
        `}
      </style>
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMsg}
        onClose={() => setSnackbarOpen(false)}
        duration={5000}
        buttonText="Delete"
      />
      <div className="page-container">
        <Header p={1} />

        <div className="details-container">
          {/* Back Link */}
          <span className="back-link" onClick={() => navigate(-1)}>
            ← Back to Pilgrimage Map
          </span>

          {/* Step Card */}
          {details ? (
            <>
              <div className="step-card">
                <div className="step-left">
                  <span className="step-label">CURRENT STEP</span>

                  <h2 className="step-title">{details?.actionName}</h2>

                  <span className="step-tag">
                    Custom Fiqh Instructions Enabled
                  </span>
                </div>

                {/* Right Side Buttons */}
                <div className="action-btns">
                  <button
                    className="reminder-btn"
                    onClick={() => setShowCommentModal(true)}
                  >
                    + Reminder
                  </button>

                  <button className="completed-btn">
                    <span className="completed-dot"></span> Completed
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="tabs">
                <button
                  className={`tab ${activeTab === "Guide" ? "active" : ""}`}
                  onClick={() => setActiveTab("Guide")}
                >
                  Guide
                </button>

                <button
                  className={`tab ${activeTab === "HowTo" ? "active" : ""}`}
                  onClick={() => setActiveTab("HowTo")}
                >
                  How To
                </button>

                <button
                  className={`tab ${activeTab === "Duas" ? "active" : ""}`}
                  onClick={() => setActiveTab("Duas")}
                >
                  Duas
                </button>
              </div>

              {/* Content Box */}
              <div className="content-box">
                {activeTab === "Guide" && (
                  <>
                    <div className="content-title">
                      Guide for {details?.actionName}
                    </div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#444",
                      }}
                    >
                      {details?.guide || "No guide available."}
                    </p>
                  </>
                )}

                {activeTab === "HowTo" && (
                  <>
                    <div className="content-title">
                      How to perform {details?.actionName}
                    </div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#444",
                      }}
                    >
                      {details?.steps?.map((item, i) => item?.howToText) ||
                        "No instructions available."}
                    </p>
                  </>
                )}

                {activeTab === "Duas" && (
                  <>
                    <div className="content-title">
                      Dua during {details?.actionName}
                    </div>

                    <div className="dua-arabic">{details?.duas[0]?.arabic}</div>

                    <div className="dua-english">
                      {details?.duas[0]?.transliteration}
                      <br />
                      <br />
                      <b>{details?.duas[0]?.translation}</b>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <p className="loading-text">Loading...</p>
          )}
        </div>
      </div>{showCommentModal && (
        <Comment
          selectedActionId={actionId}
          onSubmit={handleAddReminder}
          onClose={() => setShowCommentModal(false)} onSuccess={(msg) => {
            enqueueSnackbar(msg || "Comment added successfully", {
              variant: "success",
            });

            fetchUserComments();
          }}
        />
      )}
    </>
  );
};

export default ActionDetails;
