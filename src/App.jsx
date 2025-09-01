import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const print = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    const updateTasks = [...tasks, inputValue];
    setTasks(updateTasks);
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((t, idx) => {
      return idx != index;
    });

    setTasks(updated);
  };

  return (
    <div>
      <input type="text" onChange={print} />
      <button onClick={addTask}>Add x</button>

      <ol>
        {tasks.map((t, index) => {
          return (
            <li key={index}>
              {t}{" "}
              <button
                onClick={() => {
                  handleDelete(index);
                }}>
                Delete Z
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default App;
