import "./App.css";
import React, { useState } from "react";

import Input from "./components/inputs/Input";
import Screen from "./components/calculator screen/Screen";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [result, setResult] = useState(0);

  console.log(inputValue);

  return (
    <div className="App">
      <Screen
        screenNumber={inputValue}
        screenNumber2={inputValue2}
        result={result}
      />

      <Input setInputNumber={setInputValue} />
      <Input setInputNumber={setInputValue2} />
    </div>
  );
}

export default App;
