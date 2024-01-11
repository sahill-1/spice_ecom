import React from "react";
import "./BannerGrid.css";
const FashionBanner = () => {
  return (
    <>
      <div className="section-title text-center mt-5">
        <h2>Fruits & Vegetables</h2>
      </div>
      <div className="d-flex justify-content-between container my-3 container-div">
        {/* DIV ONE */}
        <div
          className="container-div-one"
          style={{
            width: "29.5%",
            height: "617px",
            boxShadow: "0 2px 5px 0 rgba(0,0,0,.50)",
          }}
        >
          1920*1080
        </div>

        {/* CONATaINER DIV TWO */}
        <div
          className="my-auto main-container-div-two"
          style={{ width: "69%", flexDirection: "column" }}
        >
          {/* DIV TWO */}
          <div
            className=" m-auto container-div-two"
            style={{
              height: "305px",
              boxShadow: "0 2px 5px 0 rgba(0,0,0,.50)",
            }}
          >
            1080*305
          </div>

          <div
            className=" m-auto d-flex justify-content-between third-main-container-div"
            style={{ height: "305px" }}
          >
            <div
              className="my-4 third-main-container-div-three"
              style={{
                width: "49%",
                height: "290px",
                boxShadow: "0 2px 5px 0 rgba(0,0,0,.50)",
              }}
            >
              700*305
            </div>
            <div
              className="my-4 third-main-container-div-four"
              style={{
                width: "49%",
                height: "290px",
                boxShadow: "0 2px 5px 0 rgba(0,0,0,.50)",
              }}
            >
              700*305
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionBanner;
