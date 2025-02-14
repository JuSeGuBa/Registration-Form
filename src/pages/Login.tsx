import { useEffect, useState } from "react";
import InputCustom from "../components/InputCustom";
import "../styles/login.css";
import { googleFontUrl } from "../utilities/fonts";
import { useNavigate } from "react-router";
import LoginGmail from "../components/ButtonLoginGmail";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig"; // Asegúrate de tener el archivo de configuración Firebase

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [enabled, setEnabled] = useState(false);
  const [error, setError] = useState("");

  // Recuperar los datos y el estado del toggle del localStorage al cargar la página
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const savedEnabled = localStorage.getItem("enabled") === "true"; // Recupera el estado del toggle

    if (savedEmail && savedPassword) {
      setFormData((prevData) => ({
        ...prevData,
        email: savedEmail,
        password: savedPassword,
      }));
    }

    setEnabled(savedEnabled); // Mantener el toggle activado si estaba activado previamente
  }, []);

  // Eliminar los valores del localStorage si el toggle está desactivado
  useEffect(() => {
    if (enabled) {
      localStorage.setItem("enabled", "true");
      if (formData.email && formData.password) {
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", formData.password);
      }
    } else {
      localStorage.setItem("enabled", "false");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  }, [enabled, formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("Login successful");

      if (enabled) {
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", formData.password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      navigate("/home"); // O a la página que elijas
    } catch (error: unknown) {
      console.error("Error logging in:", error);

      if (error instanceof Error && error.message === "auth/user-not-found") {
        setError("No account found with this email. Please register.");
      } else {
        setError("Invalid email or password");
      }
    }
  };

  // const handleHome = () => {
  //   navigate("/home");
  // };

  const handleNavigation = () => {
    navigate("/register");
  };

  const handleRecoverPassword = () => {
    navigate("/recover-password");
  };

  const setEmail = (email: string) => {
    setFormData((prevData) => ({
      ...prevData,
      email, // Actualiza el campo email con el correo obtenido de Google
    }));
  };

  return (
    <div className="Login">
      <link href={googleFontUrl} rel="stylesheet" />

      <h1 style={{ color: "#FFFF", fontFamily: "'Poppins', sans-serif" }}>
        Log In <sup>®</sup>
      </h1>

      <div className="inputGmail">
        <LoginGmail setEmail={setEmail} />
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
          error={error && !formData.password ? "Password is required" : ""}
        />
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Mostrar mensaje de error */}
        <div className="toggle">
          Remember me
          <button
            type="button"
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
          <button type="button" className="register" onClick={handleNavigation}>
            Register
          </button>
        </div>
        <div className="button-recoverPassword">
          <button
            className="recoverPassword"
            type="button"
            onClick={handleRecoverPassword}
          >
            Forgot your password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
