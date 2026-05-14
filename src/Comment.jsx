import React, { useState } from "react";
import { PostComment } from "./api/ZaderahServices/Zaderah";

function Comment({
    actions = [],
    onClose,
    selectedActionId = null,

    onSuccess,
}) {
    const [commentText, setCommentText] = useState("");
    const [actionId, setActionId] = useState(selectedActionId || "");
    const [loading, setLoading] = useState(false);
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userId = userData?.userID
    const handleSubmit = async () => {
        if (!commentText.trim()) {
            alert("Comment required");
            return;
        }

        if (!selectedActionId && !actionId) {
            alert("Please select action");
            return;
        }

        const payload = {
            userID: userId,
            commentText: commentText,
            actionID: Number(selectedActionId || actionId),
        };

        try {
            setLoading(true);

            await PostComment(payload);

            setCommentText("");
            setActionId("");
            onSuccess?.("Comment added successfully");
            onClose?.();   // close modal
        } catch (err) {
            console.log("PostComment error:", err);
            alert("Failed to post comment");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={overlay}>
            <div style={modal}>
                <h2 style={title}>Add Reminder</h2>
                <p style={subtitle}>Select action and share your note</p>

                {!selectedActionId && (
                    <select
                        value={actionId}
                        onChange={(e) => setActionId(e.target.value)}
                        style={select}
                    >
                        <option value="">Select Action</option>

                        {actions.map((item) => (
                            <option key={item.actionID} value={item.actionID}>
                                {item.actionName}
                            </option>
                        ))}
                    </select>
                )}

                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write your comment / dua..."
                    style={textarea}
                />

                <div style={btnRow}>
                    <button
                        onClick={onClose}
                        style={cancelBtn}
                        disabled={loading}
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        style={submitBtn}
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Comment;

/* styles */
const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
};

const modal = {
    width: "420px",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
};

const title = {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#0e4631",
};

const subtitle = {
    margin: 0,
    fontSize: "0.85rem",
    color: "#777",
};

const select = {
    padding: "0.9rem",
    borderRadius: "8px",
    border: "1px solid #ddd",
    backgroundColor: "#eef2f6",
};

const textarea = {
    minHeight: "120px",
    padding: "0.9rem",
    borderRadius: "8px",
    border: "1px solid #ddd",
    backgroundColor: "#eef2f6",
    resize: "none",
};

const btnRow = {
    display: "flex",
    gap: "10px",
};

const cancelBtn = {
    flex: 1,
    padding: "0.8rem",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#ccc",
    fontWeight: "600",
};

const submitBtn = {
    flex: 1,
    padding: "0.8rem",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#0e4631",
    color: "#fff",
    fontWeight: "600",
};