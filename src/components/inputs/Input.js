import React from "react";
import "./input.scss";

function Input({ setInputNumber }) {
  function getNumber(e) {
    setInputNumber(e.target.value);
  }

  return (
    <div>
      <input type="number" onChange={getNumber} />
    </div>
  );
}

export default Input;
