import React from "react";
import "./herosection.css";
import Heroimg from "../assets/hero-img.png";
const HeroSection = () => {
  return (
    <>
      <div className="herosection">
        <div className="hero-container">
          <div className="header">
            <div className="logo">
              <h3>bytetech solution</h3>
            </div>
            <div className="navbar">
              <p>
                <a href="#home">Home</a>
              </p>

              <p>
                <a href="#service">Services</a>
              </p>
              <p>
                <a href="#project">Projects</a>
              </p>
              <p>
                <a href="#aboutus">About us</a>
              </p>
              <p>
                <a href="#contact">Contact</a>
              </p>
            </div>
          </div>
          <div className="hero-content">
            <div className="column1">
              <div className="row1">
                <h1>
                  Empowering Business with web design, development and video
                  solution.
                </h1>
                <p>
                  It's time to stand out in the digital landscape and propel
                  your business forward. Don't wait any longer - unlock your
                  digital potential and embark on a journey of success. Contact
                  us today to get started!
                </p>
              </div>
              <div className="row2">
                <button>Contact us</button>
              </div>
            </div>
            <div className="column2">
              <img src={Heroimg} alt="heroimg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
