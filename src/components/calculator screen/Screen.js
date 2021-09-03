import React from "react";
import "./screen.scss";

const screen = ({ screenNumber, screenNumber2, result, symbol }) => {
  return (
    <div>
      <span>{screenNumber}</span>
      <span>{symbol}</span>
      <span>{screenNumber2}</span>
      <span>=</span>
      <span>{result}</span>
    </div>
  );
};

export default screen;
