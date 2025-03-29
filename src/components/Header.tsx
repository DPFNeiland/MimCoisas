import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/notes">Anotações</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
