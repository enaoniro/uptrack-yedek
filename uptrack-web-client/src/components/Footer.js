import React from "react";
import { FaHome } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="pt-3 mt-4 text-primary border-top border-gray fixed-bottom shadow-lg">
        <div className="d-flex align-items-center justify-content-center">
          <p>
          <a
                href="/"
                className="d-flex align-items-center text-primary text-decoration-ignore-non me-auto"
              >
                <span className=""><FaHome/></span>
              
              </a>
        </p>
        <p id="copyright">can &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
