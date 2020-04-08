import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product">
        <div className="product-image">
          <img src={this.props.image} alt="Product"></img>
          <h4 className="product-name">{this.props.name}</h4>
          <p className="product-price">{this.props.price}</p>
          <div className="product-action">
            <button type="button">ADD TO CART</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
