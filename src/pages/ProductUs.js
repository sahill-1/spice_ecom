import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import ProductUsImage from "../images/product.jpg";
import ProductApi from "../API/ProductApi";
import Navbar from "../components/Navbar";

const ProductUs = () => {
  const allProducts = ProductApi.flatMap(item => 
    item.categories[0].products.map(product => ({ 
        ...product, 
        categoryName: item.categories[0].name 
    }))
);
  return (
    <>
      <Navbar />
      <div
        className="breadcrumb-area"
        style={{ backgroundImage: `url(${ProductUsImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrap text-center">
                <nav aria-label="breadcrumb">
                  <h2>Products</h2>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink href="index.html">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      product us
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="shop-product-wrap grid-view row">
          {allProducts.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
              <div className="product-item">
                <div className="product-thumb">
                  <NavLink to={`/product-details/${product.categoryName}/${product.id}`}>
                    <img src={product.img} alt={product.title} />
                  </NavLink>
                  <div className="quick-view-link">
                    <NavLink to={`/product-details/${product.categoryName}/${product.id}`}>
                      <span>
                        <i className="fa-regular fa-eye"></i>
                      </span>
                    </NavLink>
                  </div>
                </div>
                <div className="product-content text-center">
                  <div className="product-name">
                    <h4 className="h5">
                      <NavLink to="product-details.html">
                        {product.title}
                      </NavLink>
                    </h4>
                  </div>
                  <div className="price-box">
                    <span className="regular-price">{product.gram}</span>
                    <span className="old-price">
                      <del></del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductUs;
