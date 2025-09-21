// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} GekkoState - Todos os direitos reservados.</p>
        
        <nav className="footer-links">
          <Link to="/">Início</Link>
          <Link to="/login">Login</Link>
          <Link to="/cadastro">Cadastro</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
