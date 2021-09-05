import "./App.scss";
import React, { useState } from "react";

import Input from "./components/inputs/Input";
import Screen from "./components/calculator-screen/Screen";
import Button from "./components/symbol-button/Button";
import CalculateBtn from "./components/calculate-button/CalculateBtn";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [result, setResult] = useState(undefined);
  const [symbol, setSymbol] = useState(undefined);

  const handleSymbol = (symbol) => {
    setSymbol(symbol);
    setResult("");
  };

  return (
    <div className="App">
      <div className="screen-container">
        <Screen
          screenNumber={inputValue}
          screenNumber2={inputValue2}
          symbol={symbol}
          result={result}
        />
      </div>
      <div className="input-container">
        <Input value={inputValue} setInputNumber={setInputValue} />
        <Input value={inputValue2} setInputNumber={setInputValue2} />
      </div>

      <div className="buttons-container">
        <div className="symbol-btn-container">
          <Button className="btn" symbol={"+"} setSymbol={handleSymbol} />

          <Button className="btn" symbol={"-"} setSymbol={handleSymbol} />

          <Button className="btn" symbol={"*"} setSymbol={handleSymbol} />

          <Button className="btn" symbol={"/"} setSymbol={handleSymbol} />
        </div>
        <div className="calculate-btn-container">
          <CalculateBtn
            className="CalculateBtn"
            value1={inputValue}
            value2={inputValue2}
            setResult={setResult}
            symbol={symbol}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
