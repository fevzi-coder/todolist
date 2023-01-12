import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const task1= [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "RectJS", isDone: false}
    ]
    const task2= [
        {id: 1, title: "Milk", isDone: true},
        {id: 2, title: "Lays", isDone: false},
        {id: 3, title: "Pepsi", isDone: false},
        {id: 3, title: "Meat", isDone: false},
    ]

  return (
    <div className="App">
      <Todolist title={'What to learn'} tasks={task1}/>
      <Todolist title={'What to by'} tasks={task2}/>
    </div>
  );
}

export default App;
