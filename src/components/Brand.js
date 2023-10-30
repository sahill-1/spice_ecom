import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../images/br1.jpg";
import img2 from "../images/br2.jpg";
import img3 from "../images/br3.jpg";
import img4 from "../images/br4.jpg";
import img5 from "../images/br5.jpg";
import img6 from "../images/br6.jpg";
import { NavLink } from "react-router-dom";

const Brand = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
      <div className="brand-area">
        <div className="container">
          <div className="brand-inner bdr-top pt-30 pb-30">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={2000}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            >
              <div className="brand-item">
                <NavLink href="#" tabindex="-1">
                  <img src={img1} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item">
                <NavLink href="#" tabindex="-1">
                  <img src={img2} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item">
                <NavLink href="#" tabindex="-1">
                  <img src={img3} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item">
                <NavLink href="#" tabindex="-1">
                  <img src={img4} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item">
                <NavLink href="#" tabindex="-1">
                  <img src={img5} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item">
                <NavLink href="#" tabindex="-1">
                  <img src={img6} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item">
                <NavLink href="#" tabindex="-1">
                  <img src={img1} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item">
                <NavLink href="#" tabindex="-1">
                  <img src={img2} alt="brand image" />
                </NavLink>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
