import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./email-password.css";

const EmailPassword: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para alternar visibilidad de la contraseña

  return (
    <div className="EmailPasswords">
      <div className="email">
        <input type="text" placeholder="Email or username" />
      </div>
      <div className="password">
        <input
          type={showPassword ? "text" : "password"} // Alternar entre 'text' y 'password'
          placeholder="Password"
        />
        <button
          className="eye-password"
          onClick={() => setShowPassword(!showPassword)}
          aria-label="Toggle password visibility"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}{" "}
          {/* Cambiar icono según el estado */}
        </button>
      </div>
      <div className="toggle">
        Remember me
        <button
          onClick={() => setEnabled(!enabled)}
          className={`${enabled ? "bg-blue" : "bg-gray-300"}`}
        >
          <span
            className={`${enabled ? "translate-x-6" : "translate-x-0"}`}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default EmailPassword;
