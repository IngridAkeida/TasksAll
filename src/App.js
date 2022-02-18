import React, { useState } from 'react';
import Header from './component/Header'
import Tasks from './component/Tasks'
import './App.css';
//import Button from './component/Button';

function App () {

  //const name = 'Joe'
  //const x = true
  const [tasks, setTasks] = useState([
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
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? {...task, reminder: 
      !task.reminder} : task
    )    
  )

}
  
  return (
    <div className="container">
        <Header/>
        {/*<h1>List</h1>
        <h2>Set {x ? 'Yes' : name }</h2>*/}
        {tasks.length > 0 ? 
            (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
          ) : (
            'No Tasks To Show')}
    </div>
  );
}



export default App;
