import React from "react";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImg from "../images/about1.jpg";
import Team1 from "../images/vector1.jpg";
import Team2 from "../images/vector2.jpg";
import Team3 from "../images/vector3.jpg";
import Team4 from "../images/vector4.jpg";
import AboutUsImage from "../images/aboutus.jpg";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <div
        className="breadcrumb-area"
        style={{ backgroundImage: `url(${AboutUsImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrap text-center">
                <nav aria-label="breadcrumb">
                  <h2>About</h2>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink href="index.html">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      about us
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-wrapper pt-60 pb-60 pb-lg-56 pt-sm-58">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 px-5">
              <div className="about-text-wrap">
                <h2>
                  About Us
                </h2>
                <p>
                Welcome to Balaji Trading Company! We are passionate purveyors of the finest spices from around the world, dedicated to bringing you the flavors and aromas that can transform your culinary creations into extraordinary culinary experiences.
                </p>
                <br />
                <p>
                At Balaji Trading Company, we believe that spices are the soul of every dish. They have the power to elevate ordinary meals to extraordinary heights, turning a simple recipe into a masterpiece. Our mission is to share the richness and diversity of spices with food enthusiasts, home cooks, and professional chefs alike.
                </p>
                {/* <p>
                  We provide the beshat they trusted us and buy our product
                  without any hagitation because they belive us and always happy
                  to buy.
                </p> */}
              </div>
            </div>

            <div className="col-xl-5 col-lg-6 ml-auto">
              <div className="about-image-wrap">
                <img src={aboutImg} alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-area bg-gray pt-60 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>our creative team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-member mb-30">
                <div className="team-thumb img-full">
                  <img src={Team1} alt="" />
                  <div className="team-social">
                    <NavLink href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-google-plus-g"></i>
                    </NavLink>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h3>Jonathan Scott</h3>
                  {/* <h6>CEO</h6>
                  <p>
                    Amadea Shop is a very slick and clean e-commerce template
                    with endless possibilities.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-member mb-30">
                <div className="team-thumb img-full">
                  <img src={Team2} alt="" />
                  <div className="team-social">
                    <NavLink href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-google-plus-g"></i>
                    </NavLink>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h3>oliver bastin</h3>
                  {/* <h6>designer</h6>
                  <p>
                    Amadea Shop is a very slick and clean e-commerce template
                    with endless possibilities.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-member mb-30">
                <div className="team-thumb img-full">
                  <img src={Team3} alt="" />
                  <div className="team-social">
                    <NavLink href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-google-plus-g"></i>
                    </NavLink>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h3>erik jonson</h3>
                  {/* <h6>developer</h6>
                  <p>
                    Amadea Shop is a very slick and clean e-commerce template
                    with endless possibilities.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-member mb-30">
                <div className="team-thumb img-full">
                  <img src={Team4} alt="" />
                  <div className="team-social">
                    <NavLink href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </NavLink>
                    <NavLink href="#">
                      <i className="fa-brands fa-google-plus-g"></i>
                    </NavLink>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h3>maria mandy</h3>
                  {/* <h6>marketing officer</h6>
                  <p>
                    Amadea Shop is a very slick and clean e-commerce template
                    with endless possibilities.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choosing-area pt-60 pb-56 pb-md-24 pb-sm-24">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>why choose us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-choose-item text-center mb-md-30 mb-sm-30">
                <i className="fa fa-globe"></i>
                <h4>free shipping</h4>
                {/* <p>
                  Amadea Shop is a very slick and clean e-commerce template with
                  endless possibilities.
                </p> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-choose-item text-center mb-md-30 mb-sm-30">
                <i className="fa fa-plane"></i>
                <h4>fast delivery</h4>
                {/* <p>
                  Amadea Shop is a very slick and clean e-commerce template with
                  endless possibilities.
                </p> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-choose-item text-center mb-md-30 mb-sm-30">
                <i className="fa fa-comments"></i>
                <h4>customers support</h4>
                {/* <p>
                  Amadea Shop is a very slick and clean e-commerce template with
                  endless possibilities.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
