import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      "_id": "6a685aa7e94d83a56bbebd10",
      "title": "Go to College",
      "description": "get ready at 9 pm you have class at 9:15",
    },
    {
      "_id": "6a685abde94d83a56bbebd11",
      "title": "Go to Gym",
      "description": "get ready at 4 pm ",
    }
  ]);

  function addtodo() {
    setTodos([...todos, {
      "_id": "6a685ad7e94d83a56bbebd12",
      "title": "Coding contest",
      "description": "You have leetcode contest at 8 pm ",
    }]);
  }

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json);
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
      });
  }, []);

  return (
    <div>
      {todos.map(function (todo) {
        return <Todo key={todo._id} title={todo.title} description={todo.description} />;
      })}
      <button onClick={addtodo}>Add TODO</button>
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
}

function Bod({ title, description }) {
  return (
    <div>
      <input type="text" placeholder="Title" value={title} onChange={() => { }} />
      <input type="text" placeholder="Description" value={description} onChange={() => { }} />
      <button>Create TODO</button>
    </div>
  );
}

export default App;