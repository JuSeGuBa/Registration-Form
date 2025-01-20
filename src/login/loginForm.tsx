import "./loginForm.css";
import EmailPassword from "./email-password/email-password";
import InputGmail from "./input-gmail/input-gmail";
import LogIn from "./log-in/log-in";
import Title from "./title-login.tsx/title";

const Login = () => {
  return (
    <div className="Login">
      <Title />
      <InputGmail />
      <EmailPassword />
      <LogIn />
    </div>
  );
};

export default Login;
