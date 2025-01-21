import { useState } from "react";
import InputCustom from "../components/InputCustom";
import "../styles/login.css";
import { googleFontUrl } from "../utilities/fonts";

const Login = () => {
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
      setError("Todos los campos son obligatorios");
      return;
    }
    // Lógica para enviar el formulario
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="Login">
      <link href={googleFontUrl} rel="stylesheet" />

      <h1 style={{ fontFamily: "'Poppins', sans-serif" }}>
        Log In <sup>®</sup>
      </h1>

      <div className="inputGmail">
        <a
          className="link-gmail"
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-gmail">LOG IN WITH GOOGLE</span>
        </a>
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
          placeholder="Ingresa tu correo electronico"
          onChange={handleChange}
          name="email"
          required
          error={error && !formData.email ? "El correo es obligatorio" : ""}
        />
        <InputCustom
          type="password"
          value={formData.password}
          placeholder="Ingresa tu contraseña"
          onChange={handleChange}
          name="password"
          required
          error={error && !formData.email ? "El correo es obligatorio" : ""}
        />
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
        <div className="button-login">
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
