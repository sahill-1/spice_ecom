import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../images/spices banner 1.jpg";
import img2 from "../images/spices banner 2.jpg";
import img3 from "../images/spices banner 3.jpg";
import img4 from "../images/spices banner 4.jpg";
import img5 from "../images/spices banner 5.jpg";
import img6 from "../images/spices banner 6.jpg";

import newbanner2 from "../images/newbanners/fruitsandveg-min.png"
import newbanner1 from "../images/newbanners/garments-min.png"
import newbanner4 from "../images/newbanners/Homepage Banner.png";
import newbanner3 from "../images/newbanners/shoebanner.png"
const HeroSlider = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          <div>
            <img src={newbanner1} alt="" className="img-fuild" />
          </div>
          <div>
            <img src={newbanner2} alt="" className="img-fuild" />
          </div>
           <div>
            <img src={newbanner3} alt="" className="img-fuild" />
          </div>
          <div>
          <img src={newbanner4} alt="" className="img-fuild" />
          </div>
          {/* <div>
          <img src={img6} alt="" className="img-fuild" />
          </div>
          <div>
            <img src={img3} alt="" className="img-fuild" />
          </div> */}
        </Carousel>
        {/* <div className="row align-items-center">
          <div className="col-md-6">
            <div className="slider-content">
              <h1>
                tasty healthy <br />
                we sell what's
                <br />
                good for you{" "}
              </h1>
              <p>We supply highly quality, premium organic products</p>
              <a href="shop.html" className="btn" tabindex="-1">
                shop now
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="slider-img">
              <img src={img1} alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HeroSlider;
