import React from "react";
import Colors from "./Lists";

const colorArray = [
  { id: 1, name: "Green" },
  { id: 2, name: "Red" },
  { id: 3, name: "Blue" },
];

function App() {
  return (
    <div className="App">
      <h1>Color List</h1>
      <Colors colors={colorArray} />
    </div>
  );
}

export default App;
