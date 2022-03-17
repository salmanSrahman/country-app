import React from "react";
import "./Home.css";
import Countries from "../Countries/Countries";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Countries />
    </div>
  );
};

export default Home;
