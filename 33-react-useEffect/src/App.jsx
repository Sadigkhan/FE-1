// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
export default function App() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { id: count, title: todo }]);
    setCount(count + 1);
    setTodo("");
  };

  const handleDelete = (id) => {
    let newArr = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newArr);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data) {
      setTasks(data);
      setCount(data[data.length - 1].id + 1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        {tasks.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title}
              <button
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                Sil
              </button>
              <button
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                Update
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
