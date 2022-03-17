import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Details = ({ country }) => {
  const navigate = useNavigate();
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
          <Button size="sm" variant="warning" onClick={() => navigate("/home")}>
            Back Home
          </Button>
          <Button
            className="ms-2"
            size="sm"
            onClick={() => navigate("/countries")}
          >
            All Countries
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Details;
