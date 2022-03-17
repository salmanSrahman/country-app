import React, { useEffect } from "react";

const Countries = () => {
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Countries</h1>
    </div>
  );
};

export default Countries;
