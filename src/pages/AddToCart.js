import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUsImage from "../images/aboutus.jpg";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CardContext";

const AddToCart = () => {
  const { cartItems, setCartItems, deleteItem } = React.useContext(CartContext);


  const [quantities, setQuantities] = React.useState({}); // default to 1

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
};

const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map(item => 
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
};

const handleQuantityChange = (itemId, event) => {
  const newQuantity = parseInt(event.target.value, 10);
  if (newQuantity >= 1 && !isNaN(newQuantity)) {
      const updatedCart = cartItems.map(item => 
          item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCart);
  }
};

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const shipping = 70; // Assuming constant shipping price of $70
  const grandTotal = totalPrice + shipping;
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
                      <NavLink href="index.html">Home</NavLink>
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
      <section>
        <div className="cart-main-wrapper py-5 my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cart-table table-responsive">
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th className="pro-thumbnail">Thumbnail</th>
                        <th className="pro-title">Product</th>
                        <th className="pro-price">Price</th>
                        <th className="pro-quantity">Quantity</th>
                        <th className="pro-subtotal">Total</th>
                        <th className="pro-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        // Calculate total for each item
                        <tr key={item.id}>
                          <td className="pro-thumbnail">
                            <NavLink href="#">
                              <img
                                className="img-fluid"
                                src={item.img}
                                alt="Product"
                              />
                            </NavLink>
                          </td>
                          <td className="pro-title">
                            <NavLink href="#">{item.title}</NavLink>
                          </td>
                          <td className="pro-price">
                            <span>{item.price}</span>
                          </td>
                          <td className="pro-quantity">
            <div className="pro-qty">
                <span
                    className="dec qtybtn"
                    onClick={() => decreaseQuantity(item.id)}
                >
                    -
                </span>
                <input
                    type="text"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                />
                <span
                    className="inc qtybtn"
                    onClick={() => increaseQuantity(item.id)}
                >
                    +
                </span>
            </div>
        </td>
                          <td className="pro-subtotal">
                            <span>
                            {item.price * item.quantity}
                            </span>
                          </td>
                          <td className="pro-remove">
                            <NavLink
                              href="#"
                              onClick={() => deleteItem(item.id)}
                            >
                              <i className="fa-regular fa-trash-can"></i>
                            </NavLink>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="cart-update-option d-block d-md-flex justify-content-between">
                  <div className="apply-coupon-wrapper">
                    <form
                      action="#"
                      method="post"
                      className=" d-block d-md-flex"
                    >
                      <input
                        type="text"
                        placeholder="Enter Your Coupon Code"
                        required=""
                      />
                      <button className="btn btn__bg btn__sqr">
                        Apply Coupon
                      </button>
                    </form>
                  </div>
                  <div className="cart-update mt-sm-16">
                    <NavLink href="#" className="btn btn__bg btn__sqr">
                      Update Cart
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 ml-auto">
                <div className="cart-calculator-wrapper">
                  <div className="cart-calculate-items">
                    <h3>Cart Totals</h3>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Sub Total</td>
                            <td>${totalPrice.toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td>Shipping</td>
                            <td>${shipping.toFixed(2)}</td>
                          </tr>
                          <tr className="total">
                            <td>Total</td>
                            <td className="total-amount">${grandTotal.toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <NavLink href="checkout.html" className="btn btn__bg d-block">
                    Proceed To Checkout
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddToCart;
