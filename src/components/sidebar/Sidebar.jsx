import React, { useState } from "react";
import "./Sidebar.scss";
import { Divide as Hamburger } from "hamburger-react";
import { IoIosPerson } from "react-icons/io";
import { GiHouseKeys, GiNewspaper, GiInfo } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { NavLink } from "react-router-dom";
//!=========================================================
const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className={isOpen ? "sidebar sidebar--active " : "sidebar"}>
      <div className="sidebar__hamburger-menu mb-lg">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="sidebar__icons">
        <NavLink className="link" to="/realtors">
          <h3 className="heading-4 heading-4--dark">Professionals</h3>
        </NavLink>
        <NavLink className="link" to="/realtors">
          <IoIosPerson className="sidebar__icon " />
        </NavLink>

        <NavLink className="link" to="/properties">
          <h3 className="heading-4 heading-4--dark">Properties</h3>
        </NavLink>
        <NavLink className="link" to="/properties">
          <GiHouseKeys className="sidebar__icon " />
        </NavLink>

        <NavLink className="link" to="/destinations">
          <h3 className="heading-4 heading-4--dark">Destinations</h3>
        </NavLink>
        <NavLink className="link" to="/destinations">
          <GoLocation className="sidebar__icon " />
        </NavLink>

        <NavLink className="link" to="/news">
          <h3 className="heading-4 heading-4--dark">News</h3>
        </NavLink>
        <NavLink className="link" to="/news">
          <GiNewspaper className="sidebar__icon " />
        </NavLink>

        <NavLink className="link" to="/about">
          <h3 className="heading-4 heading-4--dark">About</h3>
        </NavLink>
        <NavLink className="link" to="/about">
          <GiInfo className="sidebar__icon " />
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
