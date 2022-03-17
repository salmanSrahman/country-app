import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../Details/Details";

const CountryDetails = () => {
  const [countries, setCountries] = useState([]);
  const { countryName } = useParams();
  console.log(countryName);

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      {countries.map((country) => (
        <Details country={country}></Details>
      ))}
    </div>
  );
};

export default CountryDetails;
