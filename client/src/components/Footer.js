import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <p className="footer-heart">
        Made with{" "}
        <span
          className="g-emoji"
          role="img"
          aria-label="heart"
        >
          ❤️
        </span>{" "}
        by{" "}
        <span style={{ color: '#3a14f7', fontWeight: 'bold' }}>
          Soumya
        </span>
      </p>
    </div>
  );
};

export default Footer;
