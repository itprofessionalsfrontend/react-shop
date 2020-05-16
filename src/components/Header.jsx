import React, { useState, useEffect, useRef, useContext } from "react";
import { ProductContext } from "../productContext.js";

const Header = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { itemCount, totalPrice, cartProducts, removeProduct } = useContext(
    ProductContext
  );

  const cartRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleCartOpen = () => {
    console.log("handleCartOpen");
    setIsCartOpen(!isCartOpen);
  };

  const handleClickOutside = (event) => {
    console.log(event.target);
    let element = cartRef.current;

    if (element.classList.contains("active")) {
      if (!element.contains(event.target)) {
        setIsCartOpen(false);
        event.stopPropagation();
      }
    }
  };

  return (
    <header>
      <div className="container">
        <div className="brand">
          <img
            className="logo"
            alt="Veggie Logo"
            src="https://raw.githubusercontent.com/itprofessionalsfrontend/shop/master/assets/veggie.png"
          ></img>
        </div>
        <div className="search">
          <div className="search-form">
            <input
              type="search"
              className="search-keyword"
              placeholder="Search vegetables and fruits..."
              onChange={props.search}
            ></input>
          </div>
        </div>
        <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>Items</td>
                  <td>:</td>
                  <td>{itemCount}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>:</td>
                  <td>{totalPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <a className="cart-icon" href="#" onClick={handleCartOpen}>
            <img
              src="https://raw.githubusercontent.com/itprofessionalsfrontend/shop/master/assets/bag.png"
              alt="Shopping Cart"
            ></img>
          </a>
          <div
            ref={cartRef}
            className={isCartOpen ? "cart-preview active" : "cart-preview"}
          >
            <ul className="cart-items">
              {cartProducts.map((product) => {
                return (
                  <li className="cart-item" key={product.id}>
                    <img
                      className="product-image"
                      alt="Product"
                      src={product.image}
                    ></img>
                    <div className="product-info">
                      <p className="product-name">{product.name}</p>
                      <p className="product-price">{product.price}</p>
                    </div>
                    <div className="product-total">
                      <p className="quantity">{product.quantity}</p>
                      <p className="amount">
                        {product.price * product.quantity}
                      </p>
                    </div>
                    <a
                      className="product-remove"
                      onClick={() => removeProduct(product.id)}
                    >
                      x
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
