import React, { useState } from "react";
import ProductApi from "../API/ProductApi";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [productData, setProductData] = useState(ProductApi);

  const masalaProducts =
    productData.find((item) => item.categories[0].name === "masala")
      ?.categories[0].products || [];
  const spiceProducts =
    productData.find((item) => item.categories[0].name === "spice")
      ?.categories[0].products || [];
  const footwearProducts =
    productData.find((item) => item.categories[0].name === "footwear")
      ?.categories[0].products || [];
  const fashionProducts =
    productData.find((item) => item.categories[0].name === "fashion")
      ?.categories[0].products || [];
  const foodsProducts =
    productData.find((item) => item.categories[0].name === "food")
      ?.categories[0].products || [];
  const cosmeticsProducts =
    productData.find((item) => item.categories[0].name === "cosmetics")
      ?.categories[0].products || [];

  const renderProducts = (products) => {
    return products.map((product) => {
      const { id, img, title, gram } = product;
      return (
        <div className="col-lg-3 col-md-4 col-sm-6" key={id}>
          <div className="product-item">
            <div className="product-thumb">
              <NavLink to={`/product-details/${product.category}/${id}`}>
                <img src={img} alt="" />
              </NavLink>
              <div className="quick-view-link">
                <NavLink to={`/product-details/${product.category}/${id}`}>
                  <span>
                    <i className="fa-regular fa-eye"></i>
                  </span>
                </NavLink>
              </div>
            </div>
            <div className="product-content text-center">
              <div className="product-name">
                <h4 className="h5">
                  <NavLink to="product-details.html">{title}</NavLink>
                </h4>
              </div>
              <div className="price-box">
                <span className="regular-price"></span>
                <span className="old-price">
                  <del></del>
                </span>
              </div>
              <div className="product-action-link">
                {/* <NavLink
                  to="#"
                  data-bs-toggle="tooltip"
                  aria-label="Wishlist"
                  data-bs-original-title="Wishlist"
                >
                  <i className="fa-regular fa-heart"></i>
                </NavLink> */}
                {/* <NavLink
                  to="/addtocart"
                >
                  <i className="fa-solid fa-bag-shopping"></i>
                </NavLink> */}
                {/* <NavLink
                  to="#"
                  data-bs-toggle="tooltip"
                  aria-label="Compare"
                  data-bs-original-title="Compare"
                >
                  <i className="fa-solid fa-code-compare"></i>
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <section className="product-tab pt-60 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>Our Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <nav>
                <div
                  className="nav nav-tabs justify-content-center border-0 pb-5"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-Masala-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Masala"
                    type="button"
                    role="tab"
                    aria-controls="nav-Masala"
                    aria-selected="true"
                  >
                    Masala
                  </button>
                  <button
                    className="nav-link"
                    id="nav-Spices-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Spices"
                    type="button"
                    role="tab"
                    aria-controls="nav-Spices"
                    aria-selected="false"
                  >
                    Spices
                  </button>
                  <button
                    className="nav-link"
                    id="nav-Footwear-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Footwear"
                    type="button"
                    role="tab"
                    aria-controls="nav-Footwear"
                    aria-selected="false"
                  >
                    Footwear
                  </button>
                  <button
                    className="nav-link"
                    id="nav-Fashion-apparel-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Fashion-apparel"
                    type="button"
                    role="tab"
                    aria-controls="nav-Fashion-apparel"
                    aria-selected="false"
                  >
                    Fashion Apparel
                  </button>
                  <button
                    className="nav-link"
                    id="nav-Food-beverage-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Food-beverage"
                    type="button"
                    role="tab"
                    aria-controls="nav-Food-beverage"
                    aria-selected="false"
                  >
                    Food & Beverage
                  </button>
                  <button
                    className="nav-link"
                    id="nav-Cosmetics-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Cosmetics"
                    type="button"
                    role="tab"
                    aria-controls="nav-Cosmetics"
                    aria-selected="false"
                  >
                    Cosmetics
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-Masala"
                  role="tabpanel"
                  aria-labelledby="nav-Masala-tab"
                >
                  <div className="row">{renderProducts(masalaProducts)}</div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-Spices"
                  role="tabpanel"
                  aria-labelledby="nav-Spices-tab"
                >
                  <div className="row">{renderProducts(spiceProducts)}</div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-Footwear"
                  role="tabpanel"
                  aria-labelledby="nav-Footwear-tab"
                >
                  <div className="row">{renderProducts(footwearProducts)}</div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-Fashion-apparel"
                  role="tabpanel"
                  aria-labelledby="nav-Fashion-apparel-tab"
                >
                  <div className="row">{renderProducts(fashionProducts)}</div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-Food-beverage"
                  role="tabpanel"
                  aria-labelledby="nav-Food-beverage-tab"
                >
                  <div className="row">{renderProducts(foodsProducts)}</div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-Cosmetics"
                  role="tabpanel"
                  aria-labelledby="nav-Cosmetics-tab"
                >
                  <div className="row">{renderProducts(cosmeticsProducts)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
