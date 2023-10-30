import React from "react";
import logo from "../images/mr king logo.png";
import img1 from "../images/cart-1.jpg";
import img2 from "../images/cart-2.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-5">
              <div className="logo">
                <NavLink href="index.html">
                  <img src={logo} alt="Brand Logo" />
                </NavLink>
              </div>
            </div>
            <div className="col-lg-9 col-7">
              {/* <div className="header-settings-area">
                            <div className="header-top-left">
                                <nav>
                                    <ul className="d-flex justify-content-center">
                                        <li>
                                            <div className="dropdown header-top-dropdown">
                                                <NavLink className="dropdown-toggle" id="myaccount" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    my account
                                                    <i className="fa fa-angle-down"></i>
                                                </NavLink>
                                                <div className="dropdown-menu" aria-labelledby="myaccount">
                                                    <NavLink className="dropdown-item" href="my-account.html">my account</NavLink>
                                                    <NavLink className="dropdown-item" href="login-register.html"> login</NavLink>
                                                    <NavLink className="dropdown-item" href="login-register.html">register</NavLink>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown header-top-dropdown">
                                                <span>Language:</span>
                                                <NavLink className="dropdown-toggle" id="language" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    English
                                                    <i className="fa fa-angle-down"></i>
                                                </NavLink>
                                                <div className="dropdown-menu" aria-labelledby="language">
                                                    <NavLink className="dropdown-item" href="#">English</NavLink>
                                                    <NavLink className="dropdown-item" href="#">Français</NavLink>
                                                    <NavLink className="dropdown-item" href="#">Germany</NavLink>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-top-right">
                                <div className="header-search-box">
                                    <form>
                                        <input type="text" placeholder="Search Here" />
                                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                                    </form>
                                </div>
                                <div className="mini-cart-wrap">
                                    <button><i className="fa-solid fa-bag-shopping"></i>
                                        <span className="notification">2</span>
                                    </button>
                                    <ul className="cart-list">
                                        <li>
                                            <div className="cart-img">
                                                <NavLink href="product-details.html"><img src={img1} alt="" /></NavLink>
                                            </div>
                                            <div className="cart-info">
                                                <h4><NavLink href="product-details.html">simple product</NavLink></h4>
                                                <span className="cart-qty">Qty: 1</span>
                                                <span>$60.00</span>
                                            </div>
                                            <div className="del-icon">
                                                <i className="fa fa-times"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cart-img">
                                                <NavLink href="product-details.html"><img src={img2} alt="" /></NavLink>
                                            </div>
                                            <div className="cart-info">
                                                <h4><NavLink href="product-details.html">virtual product</NavLink></h4>
                                                <span className="cart-qty">Qty: 2</span>
                                                <span>$100.00</span>
                                            </div>
                                            <div className="del-icon">
                                                <i className="fa fa-times"></i>
                                            </div>
                                        </li>
                                        <li className="mini-cart-price">
                                            <span className="subtotal">subtotal : </span>
                                            <span className="subtotal-price ml-auto">$110.00</span>
                                        </li>
                                        <li className="checkout-btn">
                                            <NavLink href="#">View Cart</NavLink>
                                        </li>
                                        <li className="checkout-btn">
                                            <NavLink href="#">checkout</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
              <nav className="navbar navbar-expand-lg ">
                {/* <a className="navbar-brand" href="#">
              Navbar
            </a> */}
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
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/product">
                        product
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
