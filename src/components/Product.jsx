import React, { useState } from "react";
import Count from "./Count.jsx";

// class Product extends Component {
//   state = {
//     quantity: 1,
//   };
//   constructor(props) {
//     super(props);
//   }

//   getCount = (qnt) => {
//     console.log("getCount called and qnt : " + qnt);
//     this.setState({
//       quantity: qnt,
//     });
//   };

//   addToCart = () => {
//     let selectedProduct = {
//       id: this.props.id,
//       name: this.props.name,
//       image: this.props.image,
//       price: this.props.price,
//       quantity: this.state.quantity,
//     };

//     this.props.addToCart(selectedProduct);
//   };

//   render() {
//     // console.log("product render called");
//     return (
//       <div className="product">
//         <div className="product-image">
//           <img src={this.props.image} alt="Product"></img>
//         </div>
//         <h4 className="product-name">{this.props.name}</h4>
//         <p className="product-price">{this.props.price}</p>
//         <Count getCount={this.getCount} />
//         <div className="product-action">
//           <button type="button" onClick={this.addToCart}>
//             ADD TO CART
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  const getCount = (qnt) => {
    console.log("getCount called and qnt : " + qnt);
    setQuantity(qnt);
  };

  const addToCart = () => {
    let selectedProduct = {
      id: props.id,
      name: props.name,
      image: props.image,
      price: props.price,
      quantity: quantity,
    };

    props.addToCart(selectedProduct);
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={props.image} alt="Product"></img>
      </div>
      <h4 className="product-name">{props.name}</h4>
      <p className="product-price">{props.price}</p>
      <Count getCount={getCount} />
      <div className="product-action">
        <button type="button" onClick={addToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default Product;
