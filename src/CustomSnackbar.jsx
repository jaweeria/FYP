import React, { useEffect } from "react";

function CustomSnackbar({ open,
    title = "Success",
    message = "",
    buttonText = "Completed",
    onClose,
    onActionClick,
    duration = 6000,
}) {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [open, duration, onClose]);

    if (!open) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: "65px",
                right: "25px",
                width: "330px",
                background: "#d9fbe6",
                borderRadius: "12px",
                padding: "16px 18px",
                boxShadow: "0px 10px 35px rgba(0,0,0,0.25)",
                zIndex: 999999,
                border: "1px solid #9fe6b8",
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* Top Row */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                {/* Icon */}
                {/* <div
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "#0f4c45",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "bold",
                    }}
                >
                    ✓
                </div> */}

                {/* Text */}
                <div style={{ flex: 1 }}>
                    <div
                        style={{
                            fontSize: "15px",
                            fontWeight: "800",
                            color: "#0f4c45",
                        }}
                    >
                        {"Reminder"}
                    </div>

                    <div
                        style={{
                            marginTop: "6px",
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "#0f4c45",
                            lineHeight: "1.5",
                        }}
                    >
                        {message}
                    </div>
                </div>

                {/* Close */}
                <button
                    onClick={onClose}
                    style={{
                        background: "transparent",
                        border: "none",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "#0f4c45",
                    }}
                >
                    ✕
                </button>
            </div>

            {/* Button */}
            {/* <div style={{ marginTop: "14px", textAlign: "center" }}>
                <button
                    onClick={onActionClick}
                    style={{
                        background: "#fffcfc",
                        color: "#000000",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: "700",
                        cursor: "pointer",
                        width: "80%",
                    }}
                >
                    {buttonText}
                </button>
            </div> */}
        </div>
    );
};

export default CustomSnackbar;