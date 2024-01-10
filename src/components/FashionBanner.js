import React from "react";
import "./BannerGrid.css";
const FashionBanner = () => {
  return (
    <>
      <div className="d-flex justify-content-between container my-5">
        <div
          className=""
          style={{
            width: "29.5%",
            height: "617px",
            boxShadow: "0 2px 5px 0 rgba(0,0,0,.50)",
          }}
        >
          div one
        </div>

        <div
          className="my-auto"
          style={{ width: "69%", flexDirection: "column" }}
        >
          <div
            className=" m-auto"
            style={{
              height: "305px",
              boxShadow: "0 2px 5px 0 rgba(0,0,0,.50)",
            }}
          >
            div two{" "}
          </div>
          <div
            className=" m-auto d-flex justify-content-between"
            style={{ height: "305px" }}
          >
            <div
              className="my-4"
              style={{
                width: "49%",
                height: "290px",
                boxShadow: "0 2px 5px 0 rgba(0,0,0,.50)",
              }}
            >
              div three
            </div>
            <div
              className="my-4"
              style={{
                width: "49%",
                height: "290px",
                boxShadow: "0 2px 5px 0 rgba(0,0,0,.50)",
              }}
            >
              div four
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionBanner;
