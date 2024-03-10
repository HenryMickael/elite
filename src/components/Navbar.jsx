import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import imgN from "../assets/vectordoréR.png";

const Navbar = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" onClick={scrollToTop}>
          <img
            src={imgN}
            alt="logo Elite"
            className="img-fluid"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={scrollToTop}
                activeClassName="active" // Ajoute la classe active si c'est l'accueil
              >
                Accueil
              </NavLink>
            </li>
            {location.pathname !== "/NosFormations" && (
              <>
                <li className="nav-item">
                  <a href="#realisation" className="nav-link">
                    Nos réalisations
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#services" className="nav-link">
                    Nos services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#rdv" className="nav-link">
                    Prendre un RDV
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink
                to="/NosFormations"
                className="nav-link"
                activeClassName="active" // Ajoute la classe active si c'est NosFormations
              >
                Nos formations
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
