import React from "react";
import "./input.scss";

function Input({ value, setInputNumber }) {
  function getNumber(e) {
    setInputNumber(e.target.value);
  }

  return (
    <div>
      <input type="number" value={value} onChange={getNumber} />
    </div>
  );
}

export default Input;
