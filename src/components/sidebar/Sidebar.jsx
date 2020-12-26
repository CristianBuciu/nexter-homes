import React, { useState } from "react";
import "./Sidebar.scss";
import { Divide as Hamburger } from "hamburger-react";
//!=========================================================
const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className={isOpen ? "sidebar sidebar--active " : "sidebar"}>
      <div className="sidebar__hamburger-menu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
};

export default Sidebar;
