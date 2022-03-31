import "./App.css";
import React from "react";
import Wordle from "./Wordle/Wordle";
import KeyWatcher from "./Shared/Components/KeyWatcher/KeyWatcher";

function App() {
  return (
    <div className="App">
      <KeyWatcher />
      <Wordle />
    </div>
  );
}

export default App;
