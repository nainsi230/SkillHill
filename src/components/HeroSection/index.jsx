import React from "react";
import "./heroSection.css";

const HeroSection = ({ heading, paragraph, imageUrl }) => {
  return (
    <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white position-relative">
      <div className="container">
        <h1 className="display-4 mb-4">{heading}</h1>
        <p className="lead mb-5">{paragraph}</p>
      </div>
    </section>
  );
};

export default HeroSection;
