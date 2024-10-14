import React from 'react';
import './EmergentFooter.css'; // Asegúrate de crear este archivo para los estilos

const EmergentFooter = ({ onClose }) => {
  return (
    <div className="emergent-footer-overlay">
      <div className="emergent-footer-content">
        <h2>Información</h2>
        <p><strong>Contact us:</strong>.</p>
        <p>barneycompany@gmail.com</p>
        <p><strong>Our services:</strong>.</p>
        <p>
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p> <strong>Privicy Policy:</strong>.</p>
        <p> 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        </p>
        <p><strong>Terms & Conditions: </strong>.</p>
        <p>
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default EmergentFooter;