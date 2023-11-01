import React from "react";
import banner1 from "../images/poster 1.jpg";
import banner2 from "../images/poster 2.jpg";
import { NavLink } from "react-router-dom";

import newbanner1 from "../images/newbanners/Untitled design (10).png"
import newbanner2 from "../images/newbanners/Untitled design (12).png"
const Banner = () => {
  return (
    <>
      <div className="banner-statistics">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-container mb-sm-30">
                <NavLink href="product-details.html">
                  <img
                    src={newbanner1}
                    className="img-fuild w-100"
                    alt="banner-image"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-container mb-sm-30">
                <NavLink href="product-details.html">
                  <img
                    src={newbanner2}
                    className="img-fuild w-100"
                    alt="banner-image"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
