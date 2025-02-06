import { useState } from "react";
import InputCustom from "../components/InputCustom";
import "../styles/recoverPassword.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router";

const RecoverPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("A reset link been sent to your email.");
    } catch (error) {
      console.error("Firebase Error:", error);
      setMessage("Error sending reset email. Please try again.");
    }
  };

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="recover">
      <form onSubmit={handleSubmit}>
        <h1 className="title-resetPassword">Reset your password</h1>
        <div className="hr-container">
          <hr className="hr-line" />
        </div>{" "}
        <p className="text-recove">
          To reset your password, please enter your email address or username.
          We will send you an email with a link to reset your password.
        </p>
        <div className="input-recove">
          <InputCustom
            name="email"
            type="email"
            id="email"
            value={email}
            placeholder="Enter you email"
            onChange={handleChange}
            required={true}
          />
        </div>
        <button className="button-recover" type="submit">
          Send reset link
        </button>
        {message && <p>{message}</p>}
        <p className="option-alternative">
          <a onClick={handleNavigation}>Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default RecoverPassword;
