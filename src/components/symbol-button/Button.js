import React from "react";
import "./button.scss";

const Button = ({ symbol, setSymbol }) => {
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
