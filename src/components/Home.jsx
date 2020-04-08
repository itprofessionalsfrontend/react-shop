import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";

class Home extends Component {
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
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  handleSearch(event) {
    console.log("handle search called..");
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <>
        <Header search={this.handleSearch}></Header>

        <Footer></Footer>
      </>
    );
  }
}

export default Home;
