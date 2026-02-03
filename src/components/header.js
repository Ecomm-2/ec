import React from "react";
import tree from "./bl.png";
import "./header.css";

function Header(){
    return(
        <div className="header">
            <img src={tree} alt="Tree" className="tree" />


           <div className="Welc">
             <h1>Best product available</h1>
            <h1>on Flipkart</h1>
            </div>
        </div>
    )
}
export default Header;