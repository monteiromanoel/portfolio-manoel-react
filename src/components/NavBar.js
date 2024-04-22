import React, { useState } from 'react';
import '../styles/NavBarStyles.css';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand top-fixed bg-light mb-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <div className="d-flex align-itens-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="./About">
                  Sobre Mim
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./Projects">
                  Projetos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./Contact">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar;
