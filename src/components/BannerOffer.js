import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import img from "../images/newbanners/fruitsandveg-min.png";
const BannerOffer = () => {
  return (
    <div>
      <Row>
        <Col sm={6} md={6} lg={6}>
          <img src={img} alt="" style={{ height: "228px" }} />
        </Col>
        <Col sm={4} md={4} lg={4}>
          <img src={img} alt="" style={{ height: "228px" }} />
        </Col>
        <Col sm={2} md={2} lg={2}>
          <img src={img} alt="" style={{ height: "228px" }} />
        </Col>
      </Row>

      <div className="d-flex justify-content-between border">
        <div className="border flex-column align-items-center" style={{ width: "30%", height: "500px" }}>
          <div className="border" style={{ height: "246px" }}></div>
          <div className="border" style={{ height: "246px" }}></div>
        </div>
        <div className="border" style={{ width: "20%", height: "500px" }}>
          <div className="border" style={{ height: "246px" }}></div>
          <div className="border" style={{ height: "246px" }}></div>
        </div>
        <div className="border" style={{ width: "48%", height: "500px" }}></div>
      </div>
    </div>
  );
};

export default BannerOffer;
