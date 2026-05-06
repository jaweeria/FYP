import React, { useState } from "react";
import logo from "./assets/logo.png"; // Assuming logo is placed here based on your description
import { useSnackbar } from "notistack";
import { PostLoginUser } from "./api/ZaderahServices/Zaderah";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { enqueueSnackbar } = useSnackbar(); //ye whi notification wali library ha
  const navigate = useNavigate(); //navigate routing ka hi part ha
  const [saving, setSaving] = useState(false);
  const [fieldsData, setfieldsData] = useState({
    email: "",
    password: "",
  });
  //Post api integration
  const AddUser = async () => {
    const payload = {
      //payload basically whi hota ha jo api mn humain paramters pass krne hoty hn ye backend se set hoty hn
      email: fieldsData.email,
      password: String(fieldsData.password),
    };

    if (!payload.email) {
      //ye validation lgai hn agr email ya pass empty tb
      enqueueSnackbar("Please enter valid email", { variant: "warning" });
      return;
    }

    if (!payload.password) {
      enqueueSnackbar("Please enter password", { variant: "warning" });
      return;
    }

    setSaving(true);

    try {
      const response = await PostLoginUser(payload);
      console.log("DATA:", response.data);
      if (response && (response.status === 200 || response.status === 201)) {
        enqueueSnackbar(response?.message || "Login successfully", {
          variant: "success",
        });
        localStorage.setItem("userData", JSON.stringify(response?.data));
        navigate("/dashboard");
        setfieldsData({
          email: "",
          password: "",
        });
      } else {
        enqueueSnackbar(response?.message || "Login failed", {
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
        .login-page-container {
          min-height: 97vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f4f7f6; /* Light gray background */
          font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
          padding: 20px;
          over-flow:none
        }

        .login-card {
          background-color: #ffffff;
          padding: 3rem 2.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .login-logo {
          width: 85px;
          margin-bottom: 1.5rem;
          object-fit: contain;
        }

        .login-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0e4631; /* Deep green */
          margin: 0 0 0.5rem 0;
          letter-spacing: 0.5px;
        }

        .login-subtitle {
          font-size: 0.85rem;
          color: #777;
          margin: 0 0 2rem 0;
        }

        .login-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .login-input {
          width: 100%;
          padding: 0.9rem 1rem;
          background-color: #eef2f6; /* Soft blue-gray */
          border: 1px solid transparent;
          border-radius: 8px;
          font-size: 0.9rem;
          color: #333;
          outline: none;
          transition: border-color 0.2s, background-color 0.2s;
        }

        .login-input:focus {
          border-color: #0e4631;
          background-color: #ffffff;
        }
        
        .login-input::placeholder {
          color: #999;
        }

        .login-forgot-password {
          text-align: right;
          font-size: 0.75rem;
          font-weight: 700;
          color: #0e4631;
          text-decoration: none;
          margin-top: -0.5rem;
        }

        .login-forgot-password:hover {
          text-decoration: underline;
        }

        .login-submit-btn {
          width: 100%;
          padding: 0.9rem;
          background-color: #0e4631;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 0.5rem;
        }

        .login-submit-btn:hover {
          background-color: #0a3323;
        }

        .login-footer {
          margin-top: 2rem;
          font-size: 0.85rem;
          color: #777;
        }

        .login-footer-link {
          color: #0e4631;
          font-weight: 800;
          text-decoration: none;
          margin-left: 0.3rem;
        }

        .login-footer-link:hover {
          text-decoration: underline;
        }
      `}</style>
      <div className="login-page-container">
        <div className="login-card">
          <img src={logo} alt="Zaderah Logo" className="login-logo" />
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Please enter your details to sign in</p>

          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              AddUser();
            }}
          >
            <input
              type="email"
              className="login-input"
              placeholder="Email"
              value={fieldsData.email}
              onChange={(e) => {
                setfieldsData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
            />

            <input
              type="password"
              className="login-input"
              placeholder="Password"
              value={fieldsData.password}
              onChange={(e) => {
                setfieldsData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />

            <a href="#forgot" className="login-forgot-password">
              Forgot password?
            </a>

            <button
              type="submit"
              className="login-submit-btn"
              disabled={saving}
            >
              {saving ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="login-footer">
            Don't have an account?
            <a href="/signup" className="login-footer-link">
              Create one
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
