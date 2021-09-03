import React from "react";

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
