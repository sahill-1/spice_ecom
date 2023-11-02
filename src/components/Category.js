import React from "react";
// import img1 from "../images/products/chicken masala.png";
// import img2 from "../images/products/haldi powder.png";
// import img3 from "../images/cat6.png";
// import img4 from "../images/cat7.png";
// import img5 from "../images/cat5.png";
// import img6 from "../images/cat8.png";
import spices from "../images/newbanners/spices.jpg";
import masale from "../images/newbanners/masale.jpg";
import fashion from "../images/newbanners/fashionapparel.jpg";
import footwear from "../images/newbanners/footwear.jpg"
import food from "../images/newbanners/foodbeverge.jpg";
import cosmetics from "../images/newbanners/cosmetics.jpg";

import { NavLink } from "react-router-dom";
import "./Category.css";

const Category = () => {
  return (
    <>
      <div className="wrapper">
  <h1>Top Categories</h1>
  <div className="cols">
  <div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${spices})`}}>
						<div className="inner">
							<p>Spices</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div className="back">
						<div className="inner">
              <p>Add flavor to your dishes with our aromatic and exotic spice collection.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${masale})`}}>
						<div className="inner">
							<p>Masala</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Explore our rich masale range for authentic and delightful culinary experiences.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${fashion})`}}>
						<div className="inner">
							<p>Fashion & Apparel</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Elevate your style with our trendy fashion and chic apparel selections.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${cosmetics})`}}>
						<div className="inner">
							<p>Cosmetics</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Enhance your beauty with our high-quality cosmetic products and skincare essentials.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${food})`}}>
						<div className="inner">
							<p>Food & Beverages</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Savor the finest cuisine and indulge in a variety of refreshing beverages.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${footwear})`}}>
						<div className="inner">
							<p>Footwear</p>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Step out in style with our fashionable and comfortable footwear collection.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
 </div>
    </>
  );
};

export default Category;


