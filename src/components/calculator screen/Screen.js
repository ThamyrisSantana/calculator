import React from "react";

const screen = ({ screenNumber, screenNumber2, result }) => {
  return (
    <div>
      <div>
        <span>{screenNumber}</span>
        <span>+</span>
        <span>{screenNumber2}</span>
        <span>=</span>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default screen;
