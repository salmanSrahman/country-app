import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
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
  }, [countryName]);

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {countries.map((country) => (
          <Details country={country}></Details>
        ))}
      </Row>
    </Container>
  );
};

export default CountryDetails;
