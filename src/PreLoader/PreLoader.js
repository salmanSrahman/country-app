import React from "react";
import { Spinner } from "react-bootstrap";
import './PreLoader.css'

const PreLoader = (props) => {
  return (
    <div>
      <Spinner className="spinner-part"
        animation="grow"
        variant="danger"
        style={{ display: props.visibility }}
      />
    </div>
  );
};

export default PreLoader;
