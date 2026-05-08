// ChangePassword.jsx
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { postResetPassword } from "./api/ZaderahServices/Zaderah";
import { useLocation, useNavigate } from "react-router-dom";

function ChangePassword() {
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();

  const isForgotFlow = location.state?.fromForgotPassword;
  const navigate = useNavigate();

  const [saving, setSaving] = useState(false);

  const userData = JSON.parse(localStorage.getItem("userData"));

  const [fieldData, setfieldData] = useState({
    email: userData?.email || "",
    currentPassword: "",
    password: "",
    reEnteredPass: "",
  });

  const handleChange = (key, e) => {
    setfieldData({ ...fieldData, [key]: e.target.value });
  };

  const ResetPasswordFun = async () => {
    const payload = {
      email: fieldData.email,
      password: String(fieldData.password),
    };

    if (!isForgotFlow && !fieldData.currentPassword) {
      enqueueSnackbar("Please enter current password", { variant: "warning" });
      return;
    }

    if (!payload.password) {
      enqueueSnackbar("Please enter new password", { variant: "warning" });
      return;
    }

    if (payload.password.length < 6) {
      enqueueSnackbar("Please enter minimum 6 characters", {
        variant: "warning",
      });
      return;
    }

    if (fieldData.password !== fieldData.reEnteredPass) {
      enqueueSnackbar("Passwords do not match", { variant: "warning" });
      return;
    }

    setSaving(true);

    try {
      const response = await postResetPassword(payload);

      if (response && (response.status === 200 || response.status === 201)) {
        enqueueSnackbar(response?.message || "Password updated successfully", {
          variant: "success",
        });

        localStorage.setItem("userData", JSON.stringify(response?.data));

        setfieldData({
          // email: userData?.email || "",
          currentPassword: "",
          password: "",
          reEnteredPass: "",
        });
        if (isForgotFlow) {
          navigate("/");
        } else {
          navigate("/dashboard");
        }
      } else {
        enqueueSnackbar(response?.message || "Password update failed", {
          variant: "error",
        });
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Something went wrong", {
        variant: "error",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <style>{`
        .page {
          min-height: 100vh;
          background: #f4f6f6;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          width: 420px;
          background: #f8f9f9;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        .heading {
          text-align: center;
          color: #0f4c45;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 25px;
        }

        .group {
          margin-bottom: 18px;
        }

        .label {
          display: block;
          font-size: 13px;
          margin-bottom: 6px;
          color: #333;
        }

        .input {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 14px;
          outline: none;
          background: #fff;
          color:#000
        }

        .input:focus {
          border-color: #5aa08f;
        }

        .primaryBtn {
          width: 100%;
          padding: 12px;
          background: #5aa08f;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          margin-top: 10px;
          cursor: pointer;
          transition: 0.2s;
        }

        .primaryBtn:hover {
          background: #4c8f7f;
        }

        .secondaryBtn {
          width: 100%;
          padding: 12px;
          background: #5aa08f;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          margin-top: 12px;
          cursor: pointer;
          transition: 0.2s;
        }

        .secondaryBtn:hover {
          background: #4c8f7f;
        }
      `}</style>

      <div className="page">
        <div className="card">
          <h2 className="heading">Change Password</h2>
          {!isForgotFlow && (
            <div className="group">
              <label className="label">Current Password</label>
              <input
                type="password"
                placeholder="Enter current password"
                className="input"
                value={fieldData.currentPassword}
                onChange={(e) => handleChange("currentPassword", e)}
              />
            </div>
          )}

          <div className="group">
            <label className="label">New Password</label>
            <input
              type="password"
              placeholder="Minimum 6 characters"
              className="input"
              value={fieldData.password}
              onChange={(e) => handleChange("password", e)}
            />
          </div>

          <div className="group">
            <label className="label">Confirm New Password</label>
            <input
              type="password"
              placeholder="Repeat new password"
              className="input"
              value={fieldData.reEnteredPass}
              onChange={(e) => handleChange("reEnteredPass", e)}
            />
          </div>

          <button
            className="primaryBtn"
            onClick={ResetPasswordFun}
            disabled={saving}
            style={{ opacity: saving ? 0.7 : 1 }}
          >
            {saving ? "Updating..." : "Update Password"}
          </button>

          <button
            className="secondaryBtn"
            onClick={() => {
              if (isForgotFlow) {
                navigate("/");
              } else {
                navigate("/settings");
              }
            }}
          >
            {isForgotFlow ? "← Back to Login" : " ← Back to Settings"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
