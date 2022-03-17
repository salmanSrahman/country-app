import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Country.css";

const Country = ({ country }) => {
  console.log(country);
  const { flags, name } = country;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" className="country-flag" src={flags.png} />
        <Card.Body>
          <Card.Title>{name.common}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Country;
