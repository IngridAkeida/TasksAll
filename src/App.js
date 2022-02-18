import React, { useState } from 'react';
import Header from './component/Header'
import Tasks from './component/Tasks'
import './App.css';
//import Button from './component/Button';

function App () {

  //const name = 'Joe'
  //const x = true
  const [tasks, SetTasks] = useState([
    {
        id: 1,
        text: 'Avocado',
        kind: 'Fruit',
        reminder: true,
    },
    {
        id: 2,
        text: 'Pineapple',
        kind: 'Fruit',
        reminder: true,
    },
    {
        id: 3,
        text: 'Apple',
        kind: 'Fruit',
        reminder: true,
    },
    {
        id: 4,
        text: 'Banana',
        kind: 'Fruit',
        reminder: true,
    },
    {
        id: 5,
        text: 'Carrot',
        kind: 'Vegetable',
        reminder: true,
    },
    {
        id: 6,
        text: 'Cucumber',
        kind: 'Vegetable',
        reminder: true,
    }
])


//Delete Task
  
  return (
    <div className="container">
        <Header/>
        {/*<h1>List</h1>
        <h2>Set {x ? 'Yes' : name }</h2>*/}
        <Tasks tasks={tasks}/>
    </div>
  );
}



export default App;
