import React from "react";
import { Card, Col } from "react-bootstrap";

const Details = ({ country }) => {
  console.log(country);
  const { flags, capital, region, subregion, population, languages, name } =
    country;
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          className="country-flag img-fluid"
          src={flags.png}
        />
        <Card.Body>
          <h3>{name.common}</h3>
          <h5>Capital :{capital}</h5>
          <h5>Region :{region}</h5>
          <h5>Subregion :{subregion}</h5>
          <h5>languages :{languages.spa}</h5>
          <h5>Population: {population}</h5>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Details;
