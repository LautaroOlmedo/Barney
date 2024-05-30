import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
      <div className="footer">        
        <div className="content">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
    </div>
    </footer>
  )
  
};
