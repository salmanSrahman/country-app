import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Country.css";

const Country = ({ country }) => {
  const { flags, name } = country;

  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          className="country-flag img-fluid"
          src={flags.png}
        />
        <Card.Body>
          <Card.Title>{name.common}</Card.Title>
          <Link to={`/country/${name.common}`}> See Details</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Country;
