import "./App.css";
import React, { useState } from "react";

import Input from "./components/inputs/Input";
import Screen from "./components/calculator screen/Screen";
import Button from "./components/simbol button/Button";

function App() {
  const [inputValue, setInputValue] = useState(undefined);
  const [inputValue2, setInputValue2] = useState(undefined);
  const [result, setResult] = useState(undefined);
  const [simbol, setSimbol] = useState([]);

  return (
    <div className="App">
      <Screen
        screenNumber={inputValue}
        screenNumber2={inputValue2}
        simbol={simbol}
        result={result}
      />

      <Input setInputNumber={setInputValue} />
      <Input setInputNumber={setInputValue2} />

      <Button
        value1={inputValue}
        value2={inputValue2}
        setResult={setResult}
        simbol={"+"}
        setSimbol={setSimbol}
      />

      <Button
        value1={inputValue}
        value2={inputValue2}
        setResult={setResult}
        simbol={"-"}
        setSimbol={setSimbol}
      />

      <Button
        value1={inputValue}
        value2={inputValue2}
        setResult={setResult}
        simbol={"*"}
        setSimbol={setSimbol}
      />

      <Button
        value1={inputValue}
        value2={inputValue2}
        setResult={setResult}
        simbol={"/"}
        setSimbol={setSimbol}
      />
    </div>
  );
}

export default App;
