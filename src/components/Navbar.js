import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/mr king logo.png";
import Logo2 from "../images/newbanners/logo (2).png";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <section className="main-menu-area">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom" style={{ fontFamily: "Arial, sans-serif" }}>
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Logo2} alt="Logo" />
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontFamily: "Arial, sans-serif" }}> {/* Changed font family */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/product" activeClassName="active">
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link custom-cart-button" to="/addtocart" activeClassName="active">
                    <FaShoppingCart style={{ width: "25px", height: "25px" }} />
                    <span className="ms-1">My Cart</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
