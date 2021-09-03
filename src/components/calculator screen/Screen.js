import React from "react";

const screen = ({ screenNumber, screenNumber2, result, symbol }) => {
  return (
    <div>
      <div>
        <span>{screenNumber}</span>
        <span>{symbol}</span>
        <span>{screenNumber2}</span>
        <span>=</span>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default screen;
