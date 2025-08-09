import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  var [items, setitems] = useState([]);

  const handleSubmit = (event) => {
    var newVal = event.target.todoItem.value;
    setitems((pervItem) => {
      return [...pervItem, newVal];
    });

    event.preventDefault();
  };

  return (<div className="container">

    <div className="heading">
      <h1>To-Do List</h1>
    </div>

    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" name='todoItem'/>
        <button type='Submit'><span>Add</span></button>
      </form>
    </div>

    <div>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>

  </div>
  );
};

export default App;