import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProductUs from "./pages/ProductUs";
import AddToCart from "./pages/AddToCart";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CardContext";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  return (
    <>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<ProductUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/product-details/:category/:productId" element={<ProductDetails />} />
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;
