import React, { useState, useEffect } from "react";
import AboutUsImage from "../images/aboutus.jpg";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductApi from "../API/ProductApi";
import { CartContext } from "../context/CardContext";
import Modal from "react-modal";

const ProductDetails = () => {
  const { category, productId } = useParams();
  const product = ProductApi.flatMap((catData) =>
    catData.categories.flatMap((cat) =>
      cat.name === category ? cat.products : []
    )
  ).find((prod) => prod.id === parseInt(productId));

  //Auto scroll to top
    useEffect( () => {
      window.scrollTo(0,0)
    }, [])
  

  // Add To cart
  const navigate = useNavigate();
  const { cartItems, setCartItems } = React.useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = () => {
    const productExists = cartItems.some((p) => p.id === product.id);

    if (productExists) {
      setIsModalOpen(true); // Open the modal if product exists
      return;
    }

    const productWithQuantity = {
      ...product,
      quantity: quantity  // Add the selected quantity
  };

    const updatedCart = [...cartItems, productWithQuantity];
    setCartItems(updatedCart);
    navigate("/addtocart");
  };

  // handlers to increase, decrease
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity >= 1 && !isNaN(newQuantity)) {
      setQuantity(newQuantity);
    }
  };

  // Styled Modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#f4f4f4",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <>
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
                  <h2>Shop</h2>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add To Cart
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product-details-wrapper">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-6 d-flex justify-content-center align-items-center"
              key={product.id}
            >
              <div className="img-zoom-wrap">
                <img src={product.img} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="product-details-des">
                <div className="product-content-list">
                  <div className="ratings">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                  <div className="product-name">
                    <h4>
                      <NavLink to="#">{product.title}</NavLink>
                    </h4>
                  </div>
                  <div className="price-box">
                    <span className="regular-price">{product.price}</span>
                    <span className="old-price">
                      <del>$130.00</del>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla augue nec est tristique auctor. Donec non est at
                    libero vulputate rutrum. Morbi ornare lectus quis justo
                    gravida semper. Nulla tellus mi, vulputate adipiscing cursus
                    eu, suscipit id nulla.
                  </p>
                  <div className="action-link mb-20">
                    <a href="#" className="add-to-cart" onClick={addToCart}>
                      add to cart
                    </a>

                    <NavLink to="#">
                      <i className="fa-regular fa-heart"></i>
                    </NavLink>
                    <NavLink to="#">
                      <i className="fa-solid fa-shuffle"></i>
                    </NavLink>
                  </div>
                  <div className="quantity mb-20">
                    <div className="pro-qty">
                      <span className="dec qtybtn" onClick={handleDecrement}>
                        -
                      </span>
                      <input
                        type="text"
                        value={quantity}
                        onChange={handleQuantityChange}
                      />
                      <span className="inc qtybtn" onClick={handleIncrement}>
                        +
                      </span>
                    </div>
                  </div>
                  <div className="availability mb-20">
                    <h5>Availability:</h5>
                    <span>10 in stock</span>
                  </div>
                  <div className="share-icon">
                    <h5>share:</h5>
                    <NavLink to="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </NavLink>
                    <NavLink to="#">
                      <i className="fa-brands fa-twitter"></i>
                    </NavLink>
                    <NavLink to="#">
                      <i className="fa-brands fa-instagram"></i>
                    </NavLink>
                    <NavLink to="#">
                      <i className="fa-brands fa-google-plus-g"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product-details-reviews">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="product-review-info">
                      <div className="review-tab">
                        <ul className="nav" role="tablist">
                          <li>
                            <NavLink
                              className="active"
                              data-bs-toggle="tab"
                              to="#tab_one"
                              aria-selected="true"
                              role="tab"
                            >
                              description
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content reviews-tab">
                        <div
                          className="tab-pane fade show active"
                          id="tab_one"
                          role="tabpanel"
                        >
                          <div className="tab-one">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam fringilla augue nec est tristique
                              auctor. Ipsum metus feugiat sem, quis fermentum
                              turpis eros eget velit. Donec ac tempus ante.
                              Fusce ultricies massa massa. Fusce aliquam, purus
                              eget sagittis vulputate, sapien libero hendrerit
                              est, sed commodo augue nisi non neque Cras neque
                              metus, consequat et blandit et, luctus a nunc.
                              Etiam gravida vehicula tellus, in imperdiet ligula
                              euismod eget. Pellentesque habitant morbi
                              tristique senectus et netus et malesuada fames ac
                              turpis egestas
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles} // Apply the styles
        ariaHideApp={false}
      >
        <h2>Product already in cart</h2>
        <p>The product you tried to add is already in your cart.</p>
        <button
          onClick={() => setIsModalOpen(false)}
          style={{
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "8px 12px",
            cursor: "pointer",
            transition: "background 0.2s",
            marginTop: "20px",
          }}
          onMouseOver={(e) => (e.target.style.background = "#555")}
          onMouseOut={(e) => (e.target.style.background = "#333")}
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default ProductDetails;
