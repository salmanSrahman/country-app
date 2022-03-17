import React from "react";
import { Spinner } from "react-bootstrap";

const PreLoader = (props) => {
  return (
    <div>
      <Spinner
        animation="grow"
        variant="danger"
        style={{ display: props.visibility }}
      />
    </div>
  );
};

export default PreLoader;
