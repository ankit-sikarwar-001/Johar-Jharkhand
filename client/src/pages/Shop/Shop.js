import React from "react";
import Hero from "./Hero";
import Popular from "./Popular";
import Offers from "./Offers";
import NewCollections from "./NewCollections";
import Newsletter from "./Newsletter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  );
};

export default Shop;
