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
        <Header search={this.handleSearch}></Header>
        <Products
          productList={productList}
          loading={this.state.loading}
        ></Products>
        <Footer></Footer>
      </>
    );
  }
}

export default Home;
