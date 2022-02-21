import React, { useState } from 'react';
import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'
import './App.css';
//import Button from './component/Button';

function App () {

  //const name = 'Joe'
  //const x = true
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Avocado',
        day: 'Fruit',
        reminder: true,
    },
    {
        id: 2,
        text: 'Pineapple',
        day: 'Fruit',
        reminder: true,
    },
    {
        id: 3,
        text: 'Apple',
        day: 'Fruit',
        reminder: true,
    },
    {
        id: 4,
        text: 'Banana',
        day: 'Fruit',
        reminder: true,
    },
    {
        id: 5,
        text: 'Carrot',
        day: 'Vegetable',
        reminder: true,
    },
    {
        id: 6,
        text: 'Cucumber',
        day: 'Vegetable',
        reminder: true,
    }
])
  //Add Task
  const addTask = (task) => {
    console.log(task)
    /* essa parte não está funcionando, msg de erro: TypeError: task is not iterable
    part: and task submit 1:10:00

    const id = Math.floor(Math.random() 
    * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...task, newTask])*/
  }
  // Ajust deployed serve -s build, doesn't work 

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
      <Header 
        onAdd ={() => setShowAddTask
        (!showAddTask)} 
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask}/>}
            
      {tasks.length > 0 ? 
          (<Tasks 
            tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder}
          />
        ) : (
          'No Tasks To Show')}
    </div>
  );
}



export default App;


