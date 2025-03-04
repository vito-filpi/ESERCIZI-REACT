// src/App.js
import React, { useState } from "react";
import useCounter from "./hooks/useCounter";
import FilteredList from "./Components/FilteredList";

const App = () => {
  const { count, increment, decrement, reset } = useCounter();

  const [list, setList] = useState([
    { id: 1, name: "Alessandro", age: 32 },
    { id: 2, name: "Gabriele", age: 16 },
    { id: 3, name: "Eleonora", age: 30 },
    { id: 4, name: "Giorgia", age: 60 },
  ]);

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Reset</button>

      <FilteredList list={list} />
    </div>
  );
};

export default App;
