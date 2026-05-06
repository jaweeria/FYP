import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { PostSignupUser } from "./api/ZaderahServices/Zaderah";

const Signup = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    fiqh: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      passwordHash: form.password,
      fiqhID: Number(form.fiqh),
    };

    if (!payload.fullName) {
      enqueueSnackbar("Please enter full name", { variant: "warning" });
      return;
    }

    if (!payload.email) {
      enqueueSnackbar("Please enter email", { variant: "warning" });
      return;
    }

    if (!payload.passwordHash) {
      enqueueSnackbar("Please enter password", { variant: "warning" });
      return;
    }

    if (!payload.fiqhID) {
      enqueueSnackbar("Please select fiqh", { variant: "warning" });
      return;
    }

    setSaving(true);

    try {
      const response = await PostSignupUser(payload);

      console.log("SIGNUP RESPONSE:", response);

      if (response?.status === 200 || response?.status === 201) {
        enqueueSnackbar("Account created successfully", {
          variant: "success",
        });

        setForm({
          name: "",
          email: "",
          phone: "",
          password: "",
          fiqh: "",
        });

        navigate("/"); // login page
      } else {
        enqueueSnackbar("Signup failed", { variant: "error" });
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Something went wrong", { variant: "error" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, sans-serif; background: #f4f6f6; }

        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          width: 400px;
          background: white;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
        }

        .title {
          color: #0f4d43;
          font-weight: 700;
          margin-bottom: 5px;
                    font-size: 30px;

        }

        .subtitle {
          font-size: 14px;
          color: #777;
          margin-bottom: 20px;
        }

        .inputGroup { margin-bottom: 15px; }

        .inputGroup input,
        .inputGroup select {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 2px solid #0f4d43;
          outline: none;
          font-size: 14px;
          background: #ffffff;
        }

        .btn {
          width: 100%;
          padding: 12px;
          background: #0f4d43;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
        }

        .btn:hover { background: #0c3c35; }

        .btn:disabled {
          background: gray;
          cursor: not-allowed;
        }

        .loginText {
          margin-top: 15px;
          font-size: 14px;
        }

        .loginText span {
          color: #0f4d43;
          cursor: pointer;
          font-weight: 600;
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h1 className="title">ZADERAH</h1>
          <p className="subtitle">Create your account to continue</p>

          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inputGroup">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inputGroup">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inputGroup">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inputGroup">
              <select
                name="fiqh"
                value={form.fiqh}
                onChange={handleChange}
                required
              >
                <option value="">Select Fiqh</option>
                <option value="1">Hanafi</option>
                <option value="2">Shafi</option>
                <option value="3">Maliki</option>
                <option value="4">Hanbali</option>
              </select>
            </div>

            <button type="submit" className="btn" disabled={saving}>
              {saving ? "Creating..." : "SIGN UP"}
            </button>
          </form>

          <p className="loginText">
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>Login</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
