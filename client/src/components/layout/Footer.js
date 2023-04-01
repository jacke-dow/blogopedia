import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-content container ">
        <div className="footer-copyright">
          <p>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
        <div className="social">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
