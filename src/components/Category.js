import React from "react";
import img1 from "../images/products/chicken masala.png";
import img2 from "../images/products/haldi powder.png";
import img3 from "../images/cat-3.jpg";
import img4 from "../images/cat-4.jpg";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <>
      <section className="popular-category pb-md-30 pb-sm-30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>Popular Categories</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-5">
              <div className="category-single-item mb-md-30 mb-sm-30">
                <div className="category-item-inner color4 text-center">
                  <div className="category-content">
                    <h2>
                      <NavLink href="product-details.html">Masala</NavLink>
                    </h2>
                    <p>15 product</p>
                  </div>
                  <div className="category-thumb">
                    <NavLink href="product-details.html">
                      <img src={img1} alt="" style={{ height: "225px" }} />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-5">
              <div className="category-single-item mb-md-30 mb-sm-30">
                <div className="category-item-inner color4 text-center">
                  <div className="category-content">
                    <h2>
                      <NavLink href="product-details.html">Spices</NavLink>
                    </h2>
                    <p>5 product</p>
                  </div>
                  <div className="category-thumb">
                    <NavLink href="product-details.html">
                      <img src={img2} alt="" style={{ height: "225px" }} />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-5">
              <div className="category-single-item mb-md-30 mb-sm-30">
                <div className="category-item-inner color4 text-center">
                  <div className="category-content">
                    <h2>
                      <NavLink href="product-details.html">Footwear</NavLink>
                    </h2>
                    <p>2 product</p>
                  </div>
                  <div className="category-thumb">
                    <NavLink href="product-details.html">
                      <img src={img3} alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-5">
              <div className="category-single-item mb-md-30 mb-sm-30">
                <div className="category-item-inner color4 text-center">
                  <div className="category-content">
                    <h2>
                      <NavLink href="product-details.html">
                        Fashion apparel
                      </NavLink>
                    </h2>
                    <p>2 product</p>
                  </div>
                  <div className="category-thumb">
                    <NavLink href="product-details.html">
                      <img src={img4} alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-5">
              <div className="category-single-item mb-md-30 mb-sm-30">
                <div className="category-item-inner color4 text-center">
                  <div className="category-content">
                    <h2>
                      <NavLink href="product-details.html">
                        Food and beverage
                      </NavLink>
                    </h2>
                    <p>2 product</p>
                  </div>
                  <div className="category-thumb">
                    <NavLink href="product-details.html">
                      <img src={img4} alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-5">
              <div className="category-single-item mb-md-30 mb-sm-30">
                <div className="category-item-inner color4 text-center">
                  <div className="category-content">
                    <h2>
                      <NavLink href="product-details.html">Cosmetics</NavLink>
                    </h2>
                    <p>2 product</p>
                  </div>
                  <div className="category-thumb">
                    <NavLink href="product-details.html">
                      <img src={img4} alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>{" "}
              {/* <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-5">
                <div className="category-single-item mb-md-30 mb-sm-30">
                  <div className="category-item-inner color4 text-center">
                    <div className="category-content">
                      <h2>
                        <NavLink href="product-details.html">
                          Fashion apparel
                        </NavLink>
                      </h2>
                      <p>2 product</p>
                    </div>
                    <div className="category-thumb">
                      <NavLink href="product-details.html">
                        <img src={img4} alt="" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-5">
                <div className="category-single-item mb-md-30 mb-sm-30">
                  <div className="category-item-inner color4 text-center">
                    <div className="category-content">
                      <h2>
                        <NavLink href="product-details.html">
                          Fashion apparel
                        </NavLink>
                      </h2>
                      <p>2 product</p>
                    </div>
                    <div className="category-thumb">
                      <NavLink href="product-details.html">
                        <img src={img4} alt="" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
