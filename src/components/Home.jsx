import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";
import Products from "./Products.jsx";

class Home extends Component {
  state = {
    products: [],
    searchKeyword: "",
    loading: true,
    cartProducts: [],
    itemCount: 0,
    totalPrice: 0,
  };

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
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

  handleSearch(event) {
    console.log("handle search called..");
    this.setState({ searchKeyword: event.target.value });
  }

  componentDidMount() {
    this.getProducts();
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

  getTotalPrice(cartProductList) {
    console.log(cartProductList);
    let priceArray = cartProductList.map((p) => p.price * p.quantity);
    console.log(priceArray);

    let result = priceArray.reduce(
      (total, currentValue) => total + currentValue
    );
    return result;
  }

  render() {
    let productList = this.state.products.filter(
      (item) =>
        item.name
          .toLowerCase()
          .includes(this.state.searchKeyword.toLowerCase()) ||
        !this.state.searchKeyword
    );
    //MOVED INTO PRODUCTS COMPONENT
    // .map((product) => {
    //   return (
    //     <Product
    //       key={product.id}
    //       name={product.name}
    //       price={product.price}
    //       image={product.image}
    //     ></Product>
    //   );
    // });

    return (
      <>
        <Header
          search={this.handleSearch}
          cartProducts={this.state.cartProducts}
          productCount={this.state.itemCount}
          totalPrice={this.state.totalPrice}
        ></Header>
        <Products
          productList={productList}
          loading={this.state.loading}
          addToCart={this.addToCart}
        ></Products>
        <Footer></Footer>
      </>
    );
  }
}

export default Home;
