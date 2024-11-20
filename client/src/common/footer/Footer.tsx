import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import EmergentFooter from "../../components/EmergentFooter/EmergentFooter";

export const Footer = () => {
  const [isEmergentVisible, setEmergentVisible] = useState(false);

  const handleOpenEmergent = () => {
    setEmergentVisible(true);
  };

  const handleCloseEmergent = () => {
    setEmergentVisible(false);
  };
  return (
    <footer>
      <div className="footer">
        <div className="content">
          <ul>
            <li>
              <button onClick={handleOpenEmergent}>Contact us</button>
            </li>
            <li>
              <button onClick={handleOpenEmergent}>Our Services</button>
            </li>
            <li>
              <button onClick={handleOpenEmergent}>Privacy Policy</button>
            </li>
            <li>
              <button onClick={handleOpenEmergent}>Terms & Conditions</button>
            </li>
          </ul>
        </div>
      </div>
      {isEmergentVisible && <EmergentFooter onClose={handleCloseEmergent} />}
    </footer>
  );
};
