import React from "react";
// import img1 from "../images/products/chaat masala.png";
// import img2 from "../images/products/chicken masala.png";
// import img3 from "../images/products/chole and chana masala.png";
// import img4 from "../images/products/haldi powder.png";
// import img5 from "../images/products/kasuri methi.png";
// import img6 from "../images/products/korma.png";
import img7 from "../images/bwt-dark.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-main-area">
        <div className="container">
          <div className="footer-main-inner pb-md-20 pb-sm-20">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <div className="footer-widget-title">
                    <h4>contact info</h4>
                  </div>
                  <div className="footer-widget-body">
                    <ul className="location-wrap">
                      <li>
                        <h6 className="title">location:</h6>
                        <p>
                          Plot No. 85, Deep Enclave,
                          Vikas Nagar,<br />  Uttam Nagar,  New Delhi-110059
                        </p>
                      </li>
                      <li>
                        <h6 className="title">call us now:</h6>
                        <p>+91-9971709375</p>
                      </li>
                      <li>
                        <h6 className="title">email:</h6>
                        <p>
                          <NavLink href="#">balajitrading001@gmail.com</NavLink>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <div className="footer-widget-title">
                    <h4>new arrivals</h4>
                  </div>
                  <div className="footer-widget-body">
                    <ul className="category-list">
                      <li>
                        <div className="single-item single-item__footer-category">
                          <div className="product-description">
                            <div className="product-name">
                              <h4 className="h5">
                                <NavLink href="product-details.html">
                                  Chaat masala
                                </NavLink>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-item single-item__footer-category">
                          <div className="product-description">
                            <div className="product-name">
                              <h4 className="h5">
                                <NavLink href="product-details.html">
                                  Chicken masala
                                </NavLink>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-item single-item__footer-category">
                          <div className="product-description">
                            <div className="product-name">
                              <h4 className="h5">
                                <NavLink href="product-details.html">
                                  Kasuri Methi
                                </NavLink>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-item single-item__footer-category">
                          <div className="product-description">
                            <div className="product-name">
                              <h4 className="h5">
                                <NavLink href="product-details.html">
                                  Sneakers for Men
                                </NavLink>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-item single-item__footer-category">
                          <div className="product-description">
                            <div className="product-name">
                              <h4 className="h5">
                                <NavLink href="product-details.html">
                                  Green Kurti For Women
                                </NavLink>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <div className="footer-widget-title">
                    <h4>top rated product</h4>
                  </div>
                  <div className="footer-widget-body">
                    <ul className="category-list">
                      <li>
                        <div className="single-item single-item__footer-category">
                          <div className="product-description">
                            <div className="product-name">
                              <h4 className="h5">
                                <NavLink href="product-details.html">
                                  Korma
                                </NavLink>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-item single-item__footer-category">
                          <div className="product-description">
                            <div className="product-name">
                              <h4 className="h5">
                                <NavLink href="product-details.html">
                                  daily kids footwear
                                </NavLink>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-item single-item__footer-category">
                          <div className="product-description">
                            <div className="product-name">
                              <h4 className="h5">
                                <NavLink href="product-details.html">
                                Bell Bottom Jeans For Women
                                </NavLink>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-item single-item__footer-category">
                          <div className="product-description">
                            <div className="product-name">
                              <h4 className="h5">
                                <NavLink href="product-details.html">
                                Oats
                                </NavLink>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-item single-item__footer-category">
                          <div className="product-description">
                            <div className="product-name">
                              <h4 className="h5">
                                <NavLink href="product-details.html">
                                Lipstick
                                </NavLink>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <div className="footer-widget-title">
                    <h4>newsletter</h4>
                  </div>
                  <div className="footer-widget-body">
                    <div className="newsletter-desc">
                      <p>
                        Subscribe to the Balaji Trading Company list to receive updates
                        on new arrivals, special offers and other discount
                        information.
                      </p>
                      <form id="mc-form" novalidate="true">
                        <input
                          type="email"
                          id="mc-email"
                          autocomplete="off"
                          placeholder="Your email address"
                          name="EMAIL"
                        />
                        <button id="mc-submit">
                          <i className="fa-regular fa-paper-plane"></i>subscribe
                        </button>
                      </form>

                      <div className="mailchimp-alerts">
                        <div className="mailchimp-submitting"></div>
                        <div className="mailchimp-success"></div>
                        <div className="mailchimp-error"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bootom bg-gray pt-20 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="copyright-text text-center text-md-start">
                <p>© 2023 Designed by Business World Trade</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="payment-method text-md-end text-center">
                <img src={img7} alt=" " style={{height: "40px"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
