import React from "react";
import Navbar from './Navbar';
import HeroSlider from "./HeroSlider";
import Services from "./Services";
import Category from "./Category";
import Products from "./Products";
import Footer from "./Footer";
import Banner from "./Banner";
import WhatsNew from "./WhatsNew";
// import Brand from "./Brand";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <HeroSlider />
      <Services />
      <WhatsNew/>
      <Banner />
      {/* <Category />  */}
      <Products />
      {/* <Brand /> */}
      <Footer />
    </>
  );
};

export default Home;
