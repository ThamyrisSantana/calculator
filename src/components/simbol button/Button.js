import React from "react";

const Button = ({ setSimbol, simbol }) => {
  function sumNumbers() {
    setSimbol(simbol);
  }

  return (
    <div>
      <button onClick={sumNumbers}>{simbol}</button>
    </div>
  );
};

export default Button;
