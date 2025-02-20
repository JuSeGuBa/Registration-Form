import "../styles/register.css";
import React, { useState } from "react";
import InputCustom from "../components/InputCustom";
import { useNavigate } from "react-router";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Crear usuario en Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage("User registered successfully!");
      setError("");

      // Redirigir al login
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setError("Failed to create an account. Try again.");
      console.error("Firebase Error:", err);
    }
  };

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
        <h1 className="tittle-register">Register</h1>
        <div className="hr-register">
          <hr className="hr-line" />
        </div>

        <InputCustom
          type="text"
          id="user"
          value={formData.user}
          placeholder="Enter your User"
          onChange={handleChange}
          name="user"
          required
          aria-invalid={!!error && !formData.user}
          error={error && !formData.user ? "User is required" : ""}
        />

        <InputCustom
          type="email"
          id="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          name="email"
          required
          aria-invalid={!!error && !formData.email}
          error={error && !formData.email ? "Email is required" : ""}
        />

        <InputCustom
          type="password"
          id="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          name="password"
          required
          aria-invalid={!!error && !formData.password}
          error={error && !formData.password ? "Password is required" : ""}
        />

        <InputCustom
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm your password"
          onChange={handleChange}
          name="confirmPassword"
          required
          aria-invalid={!!error && !formData.confirmPassword}
          error={
            error && !formData.confirmPassword
              ? "Password confirmation is required"
              : error === "Passwords do not match"
                ? "Passwords do not match"
                : ""
          }
        />

        <button className="register-button" type="submit">
          Register
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <br />
        <p className="option-alternative">
          Or <a onClick={handleNavigation}>Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
