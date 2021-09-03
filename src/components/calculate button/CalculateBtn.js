import React from "react";

const CalculateButton = ({ value1, value2, setResult, simbol }) => {
  function calculate() {
    const num1 = parseInt(value1);
    const num2 = parseInt(value2);

    if (simbol === "+") {
      const sumNum = num1 + num2;

      setResult(sumNum);
    } else if (simbol === "-") {
      const subNum = num1 - num2;

      setResult(subNum);
    } else if (simbol === "*") {
      const multNum = num1 * num2;

      setResult(multNum);
    } else {
      const divNum = num1 / num2;

      setResult(divNum);
    }
  }
  return (
    <div>
      <button onClick={calculate}>=</button>
    </div>
  );
};

export default CalculateButton;
