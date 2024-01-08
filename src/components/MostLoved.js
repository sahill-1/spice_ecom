import React from "react";
import Slider from "react-slick";
import img from "../images/products/chicken masala.png";
const MostLoved = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
      <div className="mt-5 section-title text-center">
        <h2>Most Loved</h2>
      </div>
      <Slider {...settings}>
        <div className="mb-5">
          <div
            style={{
              width: "80%",
              margin: "auto",
              border: "1px solid rgba(248, 248, 248, 0.849)",
              borderRadius: "14px",
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            }}
          >
            <img src={img} alt="img" style={{ width: "80%", margin: "auto" }} />
            <h4 className="text-center ">One</h4>
            <h5 className="border border-success text-secondary shadow p-3 w-75 bg-white rounded rounded text-center mx-auto py-2 my-1">
              150 grams
            </h5>
            <p className="text-center my-2">
              {" "}
              <strong className="text-success"> 100 Rs</strong>
            </p>
          </div>
        </div>

        <div className="mb-5">
          <div
            style={{
              width: "80%",
              margin: "auto",
              border: "1px solid rgba(248, 248, 248, 0.849)",
              borderRadius: "14px",
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            }}
          >
            <img src={img} alt="img" style={{ width: "80%", margin: "auto" }} />
            <h4 className="text-center ">One</h4>
            <h5 className="border border-success text-secondary shadow p-3 w-75 bg-white rounded rounded text-center m-auto py-2 my-1">
              150 grams
            </h5>
            <p className="text-center mt-2 mb-2">
              {" "}
              <strong className="text-success"> 100 Rs</strong>
            </p>
          </div>
        </div>

        <div className="mb-5">
          <div
            style={{
              width: "80%",
              margin: "auto",
              border: "1px solid rgba(248, 248, 248, 0.849)",
              borderRadius: "14px",
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            }}
          >
            <img src={img} alt="img" style={{ width: "80%", margin: "auto" }} />
            <h4 className="text-center ">One</h4>
            <h5 className="border border-success text-secondary shadow p-3 w-75 bg-white rounded rounded text-center m-auto py-2 my-1">
              150 grams
            </h5>
            <p className="text-center mt-2 mb-2">
              {" "}
              <strong className="text-success"> 100 Rs</strong>
            </p>
          </div>
        </div>

        <div className="mb-5">
          <div
            style={{
              width: "80%",
              margin: "auto",
              border: "1px solid rgba(248, 248, 248, 0.849)",
              borderRadius: "14px",
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            }}
          >
            <img src={img} alt="img" style={{ width: "80%", margin: "auto" }} />
            <h4 className="text-center ">One</h4>
            <h5 className="border border-success text-secondary shadow p-3 w-75 bg-white rounded rounded text-center m-auto py-2 my-1">
              150 grams
            </h5>
            <p className="text-center mt-2 mb-2">
              {" "}
              <strong className="text-success"> 100 Rs</strong>
            </p>
          </div>
        </div>
npm sun start
        <div className="mb-5">
          <div
            style={{
              width: "80%",
              margin: "auto",
              border: "1px solid rgba(248, 248, 248, 0.849)",
              borderRadius: "14px",
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            }}
          >
            <img src={img} alt="img" style={{ width: "80%", margin: "auto" }} />
            <h4 className="text-center ">One</h4>
            <h5 className="border border-success text-secondary shadow p-3 w-75 bg-white rounded rounded text-center m-auto py-2 my-1">
              150 grams
            </h5>
            <p className="text-center mt-2 mb-2">
              {" "}
              <strong className="text-success">100 Rs</strong>
            </p>
          </div>
        </div>

        <div className="mb-5">
          <div
            style={{
              width: "80%",
              margin: "auto",
              border: "1px solid rgba(248, 248, 248, 0.849)",
              borderRadius: "14px",
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            }}
          >
            <img src={img} alt="img" style={{ width: "80%", margin: "auto" }} />
            <h4 className="text-center ">One</h4>
            <h5 className="border border-success text-secondary shadow p-3 w-75 bg-white rounded rounded text-center m-auto py-2 my-1">
              150 grams
            </h5>
            <p className="text-center mt-2 mb-2">
              {" "}
              <strong className="text-success"> 100 Rs</strong>
            </p>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default MostLoved;
