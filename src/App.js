import React from "react";
import "./App.css";
import NameList from "./NameList";
import names from "./namesData";

function App() {
  return (
    <div className="App">
      <NameList names={names} />
    </div>
  );
}

export default App;
