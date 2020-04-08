import React from "react";

const Products = (props) => {
  console.log("products----" + props.productList);
  return (
    <div className="products-wrapper">
      <ul className="products">{props.productList}</ul>
    </div>
  );
};

export default Products;
