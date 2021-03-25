import React from "react";
import "./Header.scss";

//!=========================================================
const Header = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="https://res.cloudinary.com/c1oud9/image/upload/v1616678375/nexter-homes/logo_fxyz2z.png"
        alt="logo"
      />
      <h3 className="heading-3 header__h3">Your own home</h3>
      <h1 className="heading-1 header__h1">The ultimate personal freedom</h1>
      <button className="button header__button">View our properties</button>
      <div className="header__seenon-text">As seen on </div>
      <div className="header__seenon-logos">
        <img
          src="https://res.cloudinary.com/c1oud9/image/upload/v1616678375/nexter-homes/logo-bbc_eocwuj.png"
          alt="logo BBC"
        />

        <img
          src="https://res.cloudinary.com/c1oud9/image/upload/v1616678375/nexter-homes/logo-forbes_mbbmto.png"
          alt="logo Forbes"
        />
        <img
          src="https://res.cloudinary.com/c1oud9/image/upload/v1616678375/nexter-homes/logo-techcrunch_dqjxxb.png"
          alt="logo TechChrunch"
        />
        <img
          src="https://res.cloudinary.com/c1oud9/image/upload/v1616678375/nexter-homes/logo-bi_iomvtb.png"
          alt="logo Bi"
        />
      </div>
    </header>
  );
};

export default Header;
