import { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/home.css";

const Home = () => {
  useEffect(() => {
    const letters = document.querySelectorAll(".letter, .name"); // Incluye ambas clases

    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          x: `random(-100, 100)`,
          y: `random(-100, 100)`,
          rotation: "random(0, 360)",
          duration: 1.2,
          ease: "power2.out",
          force3D: true, // Mayor suavidad
        });
      });

      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, {
          x: `random(-100, 100)`,
          y: `random(-100, 100)`,
          rotation: "random(0, 360)",
          duration: 1,
          ease: "power2.out",
          stagger: 0.05, // Esto crea un pequeño retraso entre cada letra
        });
      });
    });

    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener("mouseenter", () => {});
        letter.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {/* Palabra principal: Welcome */}
      <h1 style={{ fontSize: "8rem", fontWeight: "bold" }}>
        <span className="letter" style={{ position: "relative" }}>
          W
        </span>
        <span className="letter" style={{ position: "relative" }}>
          e
        </span>
        <span className="letter" style={{ position: "relative" }}>
          l
        </span>
        <span className="letter" style={{ position: "relative" }}>
          c
        </span>
        <span className="letter" style={{ position: "relative" }}>
          o
        </span>
        <span className="letter" style={{ position: "relative" }}>
          m
        </span>
        <span className="letter" style={{ position: "relative" }}>
          e
        </span>
      </h1>

      {/* Frase secundaria: Sebastian Guzman */}
      <p style={{ fontSize: "1rem", fontStyle: "italic", marginTop: "20px" }}>
        <span className="name" style={{ position: "relative" }}>
          S
        </span>
        <span className="name" style={{ position: "relative" }}>
          e
        </span>
        <span className="name" style={{ position: "relative" }}>
          b
        </span>
        <span className="name" style={{ position: "relative" }}>
          a
        </span>
        <span className="name" style={{ position: "relative" }}>
          s
        </span>
        <span className="name" style={{ position: "relative" }}>
          t
        </span>
        <span className="name" style={{ position: "relative" }}>
          i
        </span>
        <span className="name" style={{ position: "relative" }}>
          a
        </span>
        <span className="name" style={{ position: "relative" }}>
          n
        </span>
        <span className="name" style={{ position: "relative" }}></span>
        <span className="name" style={{ position: "relative" }}>
          G
        </span>
        <span className="name" style={{ position: "relative" }}>
          u
        </span>
        <span className="name" style={{ position: "relative" }}>
          z
        </span>
        <span className="name" style={{ position: "relative" }}>
          m
        </span>
        <span className="name" style={{ position: "relative" }}>
          a
        </span>
        <span className="name" style={{ position: "relative" }}>
          n
        </span>
      </p>
    </div>
  );
};

export default Home;
