import React from "react";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Product from "../components/Product/Product";

const Home = () => {
  return (
    <>
      <Intro />
      <Services/>
      <Product/>
      <Banner/>
      <Product/>
    </>
  );
};

export default Home;
