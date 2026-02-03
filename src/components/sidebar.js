import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <div className="menu-btn" onClick={() => setOpen(true)}>
        &#9776;
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        <span className="close-btn" onClick={() => setOpen(false)}>×</span>

        <Link to="/Fashion/Girls" className="sidebar-link">Female Clothes</Link>
  <Link to="/Fashion/Boys" className="sidebar-link">Male clothes</Link>
  <Link to="/Jewels" className="sidebar-link">Jewels</Link>
  <Link to="/Watches" className="sidebar-link">Watches</Link>
  <Link to="/About/US" className="sidebar-link">AboutUs</Link>
  
      </div>
    </>
  );
}
