import React, { useState } from "react";
import PropTypes from "prop-types";
//import { GifExperApp } from './GifExperApp';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");
  //Funcion del events
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setinputValue(e.target.value);
  };
  //Funcion de enter
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((catg) => [inputValue, ...catg]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{inputValue}</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
