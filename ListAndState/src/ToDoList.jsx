import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <h1>To do List</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Aggiungi cosa fare"
      />
      <button onClick={addTodo}>Aggiungi Cosa Fare</button>

      <button onClick={resetTodos}>Reset List</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
