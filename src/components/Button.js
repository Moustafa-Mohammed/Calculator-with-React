import React from "react";
import "./Button.css";

const Button = ({ num, handleBtnClick, className }) => {
  return (
    <button className={`btn ${className || ""}`} onClick={handleBtnClick}>
      {num}
    </button>
  );
};

export default Button;
