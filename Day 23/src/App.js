import React, { useState } from 'react';
import './App.css';
import { useArray } from "./useArray"



function App(props) {
  const todos = useArray(["hi there", "supp", "hru"]);
  return (
    <div className="App">

      <h3>Todos</h3>
      <button onClick={() => todos.add(Math.random())}>Add</button>
      <ul>
        {todos.value.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => todos.removeByIndex(i)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={()=>todos.clear()}>Clear</button>


    </div>
  );
}

export default App;
