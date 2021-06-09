import React, { useState } from "react";
import "./ColorForm.css";

const ColorForm = ({ addColor }) => {
  const INIT_STATE = {
    name: "",
    colorVal: "#ffffff",
  };
  const [formData, setFormData] = useState(INIT_STATE);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor(formData);
    setFormData(INIT_STATE);
  };
  return (
    <div className="ColorForm">
      <div className="ColorForm-form">
        <form className="ColorForm-items" onSubmit={handleSubmit}>
          <label htmlFor="name">Enter a color name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
          />
          <label htmlFor="color">Pick a color</label>
          <input
            type="color"
            name="colorVal"
            id="color"
            onChange={handleChange}
            value={formData.colorVal}
          />
          <button>Add this color to list</button>
        </form>
      </div>
    </div>
  );
};
export default ColorForm;
