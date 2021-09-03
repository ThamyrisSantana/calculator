import "./App.css";
import React, { useState } from "react";

import Input from "./components/inputs/Input";
import Screen from "./components/calculator screen/Screen";
import Button from "./components/symbol button/Button";
import CalculateBtn from "./components/calculate button/CalculateBtn";

function App() {
  const [inputValue, setInputValue] = useState(undefined);
  const [inputValue2, setInputValue2] = useState(undefined);
  const [result, setResult] = useState(undefined);
  const [symbol, setSymbol] = useState([]);

  return (
    <div className="App">
      <Screen
        screenNumber={inputValue}
        screenNumber2={inputValue2}
        symbol={symbol}
        result={result}
      />

      <Input setInputNumber={setInputValue} />
      <Input setInputNumber={setInputValue2} />

      <Button
        value1={inputValue}
        value2={inputValue2}
        setResult={setResult}
        symbol={"+"}
        setSymbol={setSymbol}
      />

      <Button
        value1={inputValue}
        value2={inputValue2}
        setResult={setResult}
        symbol={"-"}
        setSymbol={setSymbol}
      />

      <Button
        value1={inputValue}
        value2={inputValue2}
        setResult={setResult}
        symbol={"*"}
        setSymbol={setSymbol}
      />

      <Button
        value1={inputValue}
        value2={inputValue2}
        setResult={setResult}
        symbol={"/"}
        setSymbol={setSymbol}
      />
      <CalculateBtn
        value1={inputValue}
        value2={inputValue2}
        setResult={setResult}
        symbol={symbol}
      />
    </div>
  );
}

export default App;
