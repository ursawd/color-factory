import React from "react";
import { Link } from "react-router-dom";
const Color = ({ name, hex }) => {
  return (
    <div>
      <h1>name should be here {name}</h1>
      <h1>value is {hex}</h1>
      <Link to="/colors">Go Back</Link>
    </div>
  );
};
export default Color;
