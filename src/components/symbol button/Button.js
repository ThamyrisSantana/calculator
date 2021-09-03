import React from "react";
import "./button.scss";

const Button = ({ setSymbol, symbol }) => {
  function sumNumbers() {
    setSymbol(symbol);
  }

  return (
    <div>
      <button className="btn" onClick={sumNumbers}>
        {symbol}
      </button>
    </div>
  );
};

export default Button;
