import "./App.css";
import React, { useState } from "react";

import Input from "./components/inputs/Input";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);

  console.log(inputValue);

  return (
    <div className="App">
      <Input setInputNumber={setInputValue} />
      <Input setInputNumber={setInputValue2} />
    </div>
  );
}

export default App;
