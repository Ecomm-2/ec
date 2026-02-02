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

        <Link to="/" className="sidebar-link">Home</Link>
  <Link to="/products" className="sidebar-link">Products</Link>
  <Link to="/categories" className="sidebar-link">Categories</Link>
  <Link to="/contact" className="sidebar-link">Contact</Link>
  <Link to="/help" className="sidebar-link">Help</Link> {/* new link */}
      </div>
    </>
  );
}
