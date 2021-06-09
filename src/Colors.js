import React from "react";
import { Link } from "react-router-dom";
import "./Colors.css";

const Colors = ({ picked }) => {
  return (
    <div className="Colors">
      <div className="Colors-top">
        <h1>Welcome to the color factory!</h1>
        <Link to="/colors/new">Add a color</Link>
      </div>
      <div className="Colors-bottom">
        <p>Please select a color</p>
        {picked.map((pick, i) => {
          return (
            <Link key={i} to={`/colors/${pick.name}`}>
              {pick.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Colors;
