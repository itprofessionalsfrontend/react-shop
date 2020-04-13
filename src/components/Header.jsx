import React from "react";

const Header = (props) => {
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
                  <td>{5}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>:</td>
                  <td>{556}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
