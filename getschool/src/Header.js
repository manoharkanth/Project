import React from "react";
import { NavLink } from "react-router-dom";
import "./Components/Main.css";

const Header = () => {
  return (
    <div className="container-fluid headerback">
      <nav className="navbar navbar-expand-lg navbar-light Navcolour">
        <a className="navbar-brand" href="/">
          <img className="Image" src="./Images/Logo.jpeg" alt="Logo"  height="100px"/>
        </a>
        <h3>G.E.T CONVENT SCHOOL</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav Navbar1">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/admission"
            >
              ADMISSION ENQUIRY
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/faculty"
            >
              OUR FACULTIES
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              ABOUT
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
