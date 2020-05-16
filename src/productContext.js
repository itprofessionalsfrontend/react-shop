import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductContext = React.createContext();

const ProductContextProvider = (props) => {
  const [state, setState] = useState({
    products: [],
    cartProducts: [],
    itemCount: 0,
    totalPrice: 0,
    loading: true,
  });

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get(
        "https://raw.githubusercontent.com/itprofessionalsfrontend/shop/master/products.json"
      )
      .then((response) => {
        // setTimeout(
        //   ()=>this.setState({ products: response.data, loading: false }),
        //   10000
        // );
        setState((state) => ({
          ...state,
          products: response.data,
          loading: false,
        }));
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  const addToCart = (selectedProduct) => {
    // console.log("Home addtocart called. " + selectedProduct.quantity);
    let cartProductItems = state.cartProducts;
    if (checkProduct(selectedProduct.id)) {
      //todo:update
      // console.log("already exist product start");
      let productIndex = cartProductItems.findIndex(
        (p) => p.id === selectedProduct.id
      );
      cartProductItems[productIndex].quantity += selectedProduct.quantity;
      // console.log("already exist product end");
    } else {
      //add
      cartProductItems.push(selectedProduct);
    }
    // console.log(cartProductItems);
    setState((state) => ({
      ...state,
      cartProducts: cartProductItems,
      itemCount: state.cartProducts.length,
      totalPrice: getTotalPrice(cartProductItems),
    }));
  };

  function checkProduct(productId) {
    return state.cartProducts.some((product) => {
      return product.id === productId;
    });
  }

  const removeProduct = (id) => {
    console.log("removeProduct", id);
    //1.Method - filter
    let filteredProducts = state.cartProducts.filter((item) => item.id !== id);

    setState((state) => ({
      ...state,
      cartProducts: filteredProducts,
      itemCount: filteredProducts.length,
      totalPrice: getTotalPrice(filteredProducts),
    }));

    console.log("filteredList", filteredProducts);

    //2.Method - splice
  };

  function getTotalPrice(cartProductList) {
    console.log(cartProductList);

    if (cartProductList.length === 0) {
      return 0;
    }
    let priceArray = cartProductList.map((p) => p.price * p.quantity);
    console.log(priceArray);

    let result = priceArray.reduce(
      (total, currentValue) => total + currentValue
    );
    return result;
  }

  return (
    <ProductContext.Provider
      value={{
        ...state,
        removeProduct: removeProduct,
        addToCart: addToCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, ProductContext };
