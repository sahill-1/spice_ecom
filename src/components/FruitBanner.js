import React from "react";
import "./FruitBanner.css";
const FruitBanner = () => {
  return (
    <>
      <div className="section-title text-center mt-4">
        <h2>Fashion & Apparel</h2>
      </div>
      <div className="container">
        <section className="banner-module">
          {/* Banner 1 */}
          <div className="banner banner-one">
            {/* Headline */}
            <span className="headline">Fruits &amp; Vegetables</span>
          </div>

          {/* Banner 2 */}
          <div className="banner banner-two">
            {/* Headline */}
            <span className="headline">
              QUALITY CLOTHING <br /> FROM TOP BRANDS
            </span>
          </div>

          <div className="clear-fix"></div>

          {/* Banner 3 */}
          <div className="banner banner-three">
            {/* Headline */}
            <span className="headline">
              Spices, Herbs <br /> &amp; Seasonings
            </span>
            {/* Button */}
            <button className="shop-btn">SHOP NOW</button>
          </div>

          {/* Banner 4 */}
          <div className="banner banner-four">
            {/* Headline */}
            <span className="headline">
              TACTICAL <br /> &amp; COMBAT GEAR
            </span>
            <span className="subline">Air Force, Army, Marines &amp; Navy</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default FruitBanner;
