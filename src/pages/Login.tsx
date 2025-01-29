import { useState } from "react";
import InputCustom from "../components/InputCustom";
import "../styles/login.css";
import { googleFontUrl } from "../utilities/fonts";
import { useNavigate } from "react-router";
import LoginGmail from "../components/ButtonLoginGmail";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [enabled, setEnabled] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
    // Lógica para enviar el formulario
    console.log("Form data:", formData);
  };

  const handleNavigation = () => {
    navigate("/register");
  };

  return (
    <div className="Login">
      <link href={googleFontUrl} rel="stylesheet" />

      <h1 style={{ fontFamily: "'Poppins', sans-serif" }}>
        Log In <sup>®</sup>
      </h1>

      <div className="inputGmail">
        {/* <a className="link-gmail" target="_blank" rel="noopener noreferrer">
          <span className="text-gmail">LOG IN WITH GOOGLE</span>
        </a> */}
        <LoginGmail />
        <div className="hr-container">
          <hr className="hr-line" />
          <span className="hr-text">OR</span>
          <hr className="hr-line" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputCustom
          type="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          name="email"
          required
          error={error && !formData.email ? "Email is required" : ""}
        />
        <InputCustom
          type="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          name="password"
          required
          error={error && !formData.email ? "Password is required" : ""}
        />
        <div className="toggle">
          Remember me
          <button
            onClick={() => setEnabled(!enabled)}
            className={`${enabled ? "bg-blue" : "bg-gray-300"}`}
          >
            <span
              className={`${enabled ? "translate-x-0" : "translate-x-6"}`}
            ></span>
          </button>
        </div>
        <div className="button-login">
          <button type="submit">Login</button>
        </div>
        <div className="button-register">
          <button type="submit" className="register" onClick={handleNavigation}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
