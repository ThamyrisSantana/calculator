import React from "react";

const screen = ({ screenNumber, screenNumber2, result, simbol }) => {
  return (
    <div>
      <div>
        <span>{screenNumber}</span>
        <span>{simbol}</span>
        <span>{screenNumber2}</span>
        <span>=</span>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default screen;
