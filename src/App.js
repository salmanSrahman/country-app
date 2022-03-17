import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./Components/Countries/Countries";
import CountryDetails from "./Components/CountryDetails/CountryDetails";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/countries" element={<Countries />}></Route>
          <Route
            path="/country/:countryName"
            element={<CountryDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
