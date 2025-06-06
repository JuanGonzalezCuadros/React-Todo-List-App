import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} placeholder="Enter a task" onChange={(e) => setInput(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
