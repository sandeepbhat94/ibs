import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Home.css";
import SearchBox from "./SearchBox"; // Ensure the correct path

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ["Data", "Technology", "Creativity"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(".auto-type", options);

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home" >
      <p className="title">
        Immersive Digital Experiences
        <br />
        Through <span className="auto-type"></span>
      </p>
      <SearchBox />
      <p className="flexx">
        <img src="/PowerAi.webp" alt="imgg" />
        <p className="powered-by-ai">Powered by AI</p>
      </p>

      <div className="glass-button">
        <a href="#Our-Services" className="button-link">
          Explore Our Services
          <span className="icon"></span> {/* Downward V-shaped icon */}
        </a>
      </div>
    </div>
  );
};

export default Home;
