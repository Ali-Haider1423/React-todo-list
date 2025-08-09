import React from 'react';
import { useState } from 'react';
import ITEMS from './components/todoitems';
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

  const handleDelete = (id) => {
    var newArr = [...items];
    newArr.splice(id, 1);
    console.log(newArr);
    setitems(newArr);
  };


  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" name='todoItem' />
          <button type='Submit'><span>Add</span></button>
        </form>
      </div>

      <ITEMS propItems={items} checked={handleDelete} />

    </div>
  );
};

export default App;