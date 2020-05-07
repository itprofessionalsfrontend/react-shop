import React from "react";
import { render } from "react-dom";
import Home from "./components/Home.jsx";
import { ProductContextProvider } from "./productContext.js";

const App = () => {
  return (
    <ProductContextProvider>
      <Home />
    </ProductContextProvider>
  );
};

render(<App />, document.getElementById("root"));
