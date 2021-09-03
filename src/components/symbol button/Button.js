import React from "react";

const Button = ({ setSymbol, symbol }) => {
  function sumNumbers() {
    setSymbol(symbol);
  }

  return (
    <div>
      <button onClick={sumNumbers}>{symbol}</button>
    </div>
  );
};

export default Button;
