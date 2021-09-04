import React from "react";
import "./button.scss";

const Button = ({ setSymbol, symbol, setResult }) => {
  function sumNumbers() {
    setSymbol(symbol);
    setResult("");
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
