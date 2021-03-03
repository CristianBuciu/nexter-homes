import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import logoBbc from "../../assets/logo-bbc.png";
import logoBi from "../../assets/logo-bi.png";
import logoForbes from "../../assets/logo-forbes.png";
import logoTechCrunch from "../../assets/logo-techcrunch.png";
//!=========================================================
const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <h3 className="heading-3 header__h3">Your own home</h3>
      <h1 className="heading-1 header__h1">The ultimate personal freedom</h1>
      <button className="button header__button">View our properties</button>
      <div className="header__seenon-text">As seen on </div>
      <div className="header__seenon-logos">
        <img src={logoBbc} alt="logo BBC" />

        <img src={logoForbes} alt="logo Forbes" />
        <img src={logoTechCrunch} alt="logo TechChrunch" />
        <img src={logoBi} alt="logo Bi" />
      </div>
    </header>
  );
};

export default Header;
