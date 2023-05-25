import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <div className="footer-logo">
            <h1>bytetech so.</h1>
          </div>
          <div className="footer-content">
            <div className="footer-info">
              <h2>Bytetech Solution</h2>
              <p>+977 9869085531</p>
              <p>bytetechweb69@gmail.com</p>
            </div>
            <div className="footer-address">
              <h2>Address</h2>
              <p>Tikathali</p>
              <p>Lalitpur, Nepal</p>
            </div>
            <div className="footer-contact">
              <h2>Links</h2>
              <p>Services</p>
              <p>Projects</p>
              <p>About us</p>
            </div>
            <div className="footer-service">
              <h2>Services</h2>
              <p>UI/UX Design</p>
              <p>Web Development</p>
              <p>Video Production</p>
            </div>
            <div className="footer-skill">
              <h3>Stay Motivated</h3>
              <p>
                <i>
                  "Embrace challenges, harness technology, and dare to disrupt."
                </i>
              </p>
            </div>
          </div>
          <div className="hori-line"></div>
          <div className="footer-bottom">
            <div className="social-icon">
              <div>
                <a
                  href="https://github.com/srajay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/ajay-chaudhary-b64214242/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/__ajaychaudhary/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="copy-right">
              <p>&#169; bytetech solution. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
