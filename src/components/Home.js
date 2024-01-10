import React from "react";
import Navbar from './Navbar';
import HeroSlider from "./HeroSlider";
import Services from "./Services";
import Category from "./Category";
import Products from "./Products";
import Footer from "./Footer";
import Banner from "./Banner";
import WhatsNew from "./WhatsNew";
import TopNavbar from "./TopNavbar";
import FruitBanner from "./FruitBanner";
import FashionBanner from "./FashionBanner";
const Home = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <HeroSlider />
      <Services />
      <WhatsNew/>
      <Banner />
      <Category /> 
      <FruitBanner/>
      <FashionBanner />
      <Products />
      {/* <Brand /> */}
      <Footer />
    </>
  );
};

export default Home;
