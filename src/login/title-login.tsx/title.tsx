import "./title.css";

const googleFontUrl =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";

const Title = () => {
  return (
    <>
      {/* Importa la fuente desde Google Fonts */}
      <link href={googleFontUrl} rel="stylesheet" />

      {/* Aplica la fuente al título */}
      <h1 style={{ fontFamily: "'Poppins', sans-serif" }}>
        Log In <sup>®</sup>
      </h1>
    </>
  );
};

export default Title;
