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
      </div>
    </header>
  );
};

export default Header;
