import React from "react";
import NavBar from "../components/NavBar";
import ProductList from "../features/product-list/ProductList";

const Homepage = () => {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </div>
  );
};

export default Homepage;
