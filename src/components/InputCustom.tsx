import React, { useState } from "react";
import { InputFieldProps } from "../interfaces/Input";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "../styles/input.css";

const InputCustom: React.FC<InputFieldProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="input-field">
      <div className="container-input">
        <input
          id={name}
          type={inputType}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
        />
        {type === "password" && (
          <button
            className="eye-password"
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Toggle password visibility"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}{" "}
            {/* Cambiar icono según el estado */}
          </button>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputCustom;
