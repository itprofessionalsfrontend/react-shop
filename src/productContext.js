import React, { Component } from "react";
import axios from "axios";

const { Provider, Consumer } = React.createContext();

class ProductContextProvider extends Component {
  state = {
    products: [],
    cartProducts: [],
    itemCount: 0,
    totalPrice: 0,
    loading: true,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios
      .get(
        "https://raw.githubusercontent.com/itprofessionalsfrontend/shop/master/products.json"
      )
      .then((response) => {
        // setTimeout(
        //   ()=>this.setState({ products: response.data, loading: false }),
        //   10000
        // );
        this.setState({ products: response.data, loading: false });
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  addToCart = (selectedProduct) => {
    // console.log("Home addtocart called. " + selectedProduct.quantity);
    let cartProductItems = this.state.cartProducts;
    if (this.checkProduct(selectedProduct.id)) {
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
    this.setState({
      cartProducts: cartProductItems,
      itemCount: this.state.cartProducts.length,
      totalPrice: this.getTotalPrice(cartProductItems),
    });
  };

  checkProduct(productId) {
    return this.state.cartProducts.some((product) => {
      return product.id === productId;
    });
  }

  removeProduct = (id) => {
    console.log("removeProduct", id);
    //1.Method - filter
    let filteredProducts = this.state.cartProducts.filter(
      (item) => item.id !== id
    );

    this.setState({
      cartProducts: filteredProducts,
      itemCount: filteredProducts.length,
      totalPrice: this.getTotalPrice(filteredProducts),
    });

    console.log("filteredList", filteredProducts);

    //2.Method - splice
  };

  getTotalPrice(cartProductList) {
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

  render() {
    const {
      products,
      cartProducts,
      itemCount,
      totalPrice,
      loading,
    } = this.state;
    return (
      <Provider
        value={{
          products: products,
          cartProducts,
          itemCount,
          totalPrice,
          loading,
          removeProduct: this.removeProduct,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ProductContextProvider, Consumer as ProductContextConsumer };
