import React from "react";
import "./calculateBtn.scss";

const isNumber = (value) => {
  return typeof value === "number" && !Number.isNaN(value);
};

const CalculateButton = ({ value1, value2, setResult, symbol }) => {
  function calculate() {
    const num1 = parseInt(value1);
    const num2 = parseInt(value2);

    if (!isNumber(num1) || !isNumber(num2)) {
      return;
    }

    if (symbol === "+") {
      const sumNum = num1 + num2;

      setResult(sumNum);
    } else if (symbol === "-") {
      const subNum = num1 - num2;

      setResult(subNum);
    } else if (symbol === "*") {
      const multNum = num1 * num2;

      setResult(multNum);
    } else if (symbol === "/") {
      const divNum = num1 / num2;

      setResult(divNum);
    }
  }

  return (
    <button className="button" onClick={calculate}>
      =
    </button>
  );
};

export default CalculateButton;
