import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import PreLoader from "../../PreLoader/PreLoader";
import Country from "../Country/Country";

const Countries = () => {
  const [spinnerVisibility, setSpinnerVisibility] = useState("block");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <Container>
      {!countries.length ? (
        <PreLoader visibility={spinnerVisibility} />
      ) : (
        <Row xs={1} md={4} className="g-4">
          {countries.map((country) => (
            <Country country={country}></Country>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Countries;
