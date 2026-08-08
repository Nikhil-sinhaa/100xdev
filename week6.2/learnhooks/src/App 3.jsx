import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button
        onClick={function () {
          setSelectedId(1);
        }}
      >
        1
      </button>

      <button
        onClick={function () {
          setSelectedId(2);
        }}
      >
        2
      </button>

      <button
        onClick={function () {
          setSelectedId(3);
        }}
      >
        3
      </button>

      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response) => {
        setTodo(response.data.todo);
      });
  }, [id]);

  return (
    <div>
      <h2>Id: {id}</h2>

      <h1>{todo.title}</h1>

      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;