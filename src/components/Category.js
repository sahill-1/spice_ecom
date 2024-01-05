import React from "react";
import spices from "../images/newbanners/spices.jpg";
import masale from "../images/newbanners/masale.jpg";
import fashion from "../images/newbanners/fashionapparel.jpg";
import footwear from "../images/newbanners/footwear.jpg";
import food from "../images/newbanners/foodbeverge.jpg";
import cosmetics from "../images/newbanners/cosmetics.jpg";
import Slider from "react-slick";
import "./Category.css";

const Category = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
    <div className="section-title text-center mt-2">
                <h2>Top Categories</h2>
              </div>
      <Slider {...settings}>
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${spices})` }}
            >
              <div className="inner">
                <p>Spices</p>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Add flavor to your dishes with our aromatic and exotic spice
                  collection.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${masale})` }}
            >
              <div className="inner">
                <p>Masala</p>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Explore our rich masale range for authentic and delightful
                  culinary experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${fashion})` }}
            >
              <div className="inner">
                <p>Fashion & Apparel</p>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Elevate your style with our trendy fashion and chic apparel
                  selections.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${cosmetics})` }}
            >
              <div className="inner">
                <p>Cosmetics</p>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Enhance your beauty with our high-quality cosmetic products
                  and skincare essentials.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div className="front" style={{ backgroundImage: `url(${food})` }}>
              <div className="inner">
                <p>Food & Beverages</p>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Savor the finest cuisine and indulge in a variety of
                  refreshing beverages.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${footwear})` }}
            >
              <div className="inner">
                <p>Footwear</p>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Step out in style with our fashionable and comfortable
                  footwear collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Category;
