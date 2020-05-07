import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Products from "./Products.jsx";
import { ProductContextConsumer } from "../productContext.js";

// class Home extends Component {
//   state = {
//     searchKeyword: "",
//   };

//   constructor(props) {
//     super(props);
//     this.handleSearch = this.handleSearch.bind(this);
//   }

//   handleSearch(event) {
//     console.log("handle search called..");
//     this.setState({ searchKeyword: event.target.value });
//   }

//   render() {
//     //MOVED INTO PRODUCTS COMPONENT
//     // .map((product) => {
//     //   return (
//     //     <Product
//     //       key={product.id}
//     //       name={product.name}
//     //       price={product.price}
//     //       image={product.image}
//     //     ></Product>
//     //   );
//     // });

//     return (
//       <>
//         <Header search={this.handleSearch}></Header>
//         <ProductContextConsumer>
//           {({ products, loading, addToCart }) => (
//             <Products
//               loading={loading}
//               addToCart={addToCart}
//               productList={products.filter(
//                 (item) =>
//                   item.name
//                     .toLowerCase()
//                     .includes(this.state.searchKeyword.toLowerCase()) ||
//                   !this.state.searchKeyword
//               )}
//             ></Products>
//           )}
//         </ProductContextConsumer>
//         {/* <Products
//           productList={productList}
//           loading={this.state.loading}
//           addToCart={this.addToCart}
//         ></Products> */}
//         <Footer></Footer>
//       </>
//     );
//   }
// }

function Home(props) {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (event) => {
    console.log("handle search called..");
    setSearchKeyword(event.target.value);
  };

  return (
    <>
      <Header search={handleSearch}></Header>
      <ProductContextConsumer>
        {({ products, loading, addToCart }) => (
          <Products
            loading={loading}
            addToCart={addToCart}
            productList={products.filter(
              (item) =>
                item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                !searchKeyword
            )}
          ></Products>
        )}
      </ProductContextConsumer>
      <Footer></Footer>
    </>
  );
}

export default Home;
