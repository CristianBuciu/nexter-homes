import React from "react";
import "./Footer.scss";
//!=========================================================
const Footer = () => {
  return <footer className="footer">
    <ul className="nav">
      <li className="nav__item"><p className="nav__link">Find your dream home</p></li>
      <li className="nav__item"><p className="nav__link">Request proposal</p></li>
      <li className="nav__item"><p className="nav__link">Download the home planner</p></li>
      <li className="nav__item"><p className="nav__link">Contact us</p></li>
      <li className="nav__item"><p className="nav__link">Submit your property</p></li>
      <li className="nav__item"><p className="nav__link">Come work with us</p></li>
    </ul>
    <p className="copyright">&copy; Copyright 2021 by Cristian Buciu.</p>
  </footer>;
};

export default Footer;
