import { FaChevronCircleDown } from "react-icons/fa";
import { useState, useEffect } from "react";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const text = [
    "synergy.",
    "innovation.",
    "creativity.",
    "passion.",
    "solutions.",
    "success.",
    "diversity.",
    "cutting-edge.",
    "efficiency.",
    "growth.",
    "quality.",
    "results.",
    "value.",
    "expertise.",
  ];
  const typingDelay = 250;
  let currentWordIndex = 0;

  const typeText = (text: string, typingDelay: number) => {
    let currentIndex = 0;
    let textContent = "";

    const typeCharacter = () => {
      if (currentIndex < text.length) {
        textContent += text.charAt(currentIndex);
        setTypedText(textContent);
        currentIndex++;
        setTimeout(typeCharacter, typingDelay);
        return;
      }
    };

    typeCharacter();
  };

  useEffect(() => {
    typeText(text[currentWordIndex], typingDelay);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      currentWordIndex++;
      if (currentWordIndex === text.length) {
        currentWordIndex = 0;
      }
      typeText(text[currentWordIndex], typingDelay);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header vh-100 text-center position-relative">
      <div className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100">
        <h5 className="text-primary fs-3 fw-bold text-uppercase">
          Philip Neumann is
        </h5>
        <h1
          id="typing-text"
          className="display-1 fw-bold text-secondary text-uppercase"
        >
          {typedText}
        </h1>
        <p className="roles text-white text-uppercase fs-4">
          <span>Full Stack Web Developer</span>
        </p>

        <a href="#about" className="btn btn-outline-light btn-lg mt-3">
          <div className="d-flex">
            <div className="me-3 fs-5">
              <FaChevronCircleDown className="mb-1" />
            </div>
            <div className="text-start">
              <span>More About Me</span>
            </div>
          </div>
        </a>

        <div className="social d-flex gap-3 position-absolute">
          <a href="#">
            <i className="fab fa-twitter fa-3x text-white"></i>
          </a>
          {/* Add more social media links */}
        </div>
      </div>
    </header>
  );
}

export default Hero;
