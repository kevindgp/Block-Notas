import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <h1 id="titulo">Mi Bloc de Notas</h1>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Añade una nueva tarea"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={handleAddTask}>Añadir</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

