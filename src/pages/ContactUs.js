import React from "react";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import ContactUsImage from "../images/contactus.jpg";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <div
        className="breadcrumb-area"
        style={{ backgroundImage: `url(${ContactUsImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrap text-center">
                <nav aria-label="breadcrumb">
                  <h2>contact</h2>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink href="index.html">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      contact us
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-area">
        <div class="container-fluid">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="contact-message pt-56 pb-60">
                <h2>tell us your Message</h2>
                <form
                  id="contact-form"
                  action="assets/php/mail.php"
                  method="post"
                  class="contact-form"
                >
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <input
                        name="first_name"
                        placeholder="Name *"
                        type="text"
                        required=""
                      />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <input
                        name="phone"
                        placeholder="Phone *"
                        type="text"
                        required=""
                      />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <input
                        name="email_address"
                        placeholder="Email *"
                        type="text"
                        required=""
                      />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <input
                        name="contact_subject"
                        placeholder="Subject *"
                        type="text"
                      />
                    </div>
                    <div class="col-12">
                      <div class="contact2-textarea text-center">
                        <textarea
                          placeholder="Message *"
                          name="message"
                          class="form-control2"
                          required=""
                        ></textarea>
                      </div>
                      <div class="contact-btn">
                        <button class="btn" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                      <p class="form-messege"></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-info bg-gray pt-56 pb-md-46 mb-sm-24">
                <h2>contact us</h2>
                <p>
                You can contact us for any of your requirements. We’ll help you meet your needs.
                </p>
                <ul>
                  <li>
                    <i class="fa-regular fa-address-book"></i> Plot No. 85, Deep
                    Enclave, Vikas Nagar, Uttam Nagar, New Delhi-110059
                  </li>
                  <li>
                    <i class="fa-regular fa-envelope"></i>{" "}
                    balajitrading001@gmail.com
                  </li>
                  <li>
                    <i class="fa-solid fa-phone"></i>+91-9971709375
                  </li>
                </ul>
                <div class="working-time">
                  <h3>Working hours</h3>
                  <p>
                    <span>Monday – Saturday:</span> 08AM – 22PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56027.71844672341!2d76.96553144863276!3d28.6377812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0511013a2959%3A0x79ded8e511155563!2sShri%20Balaji%20Trading%20Co.!5e0!3m2!1sen!2sin!4v1694756718374!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </>
  );
};

export default ContactUs;
