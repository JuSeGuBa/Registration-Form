import "./input-gmail.css";

const InputGmail = () => {
  return (
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
  );
};

export default InputGmail;
