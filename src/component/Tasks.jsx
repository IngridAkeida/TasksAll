import React, { useState } from "react";
import Task from './Task'


const Tasks = () => {

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
    return(
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task}/>
            ))}   
        </>
    )
}

export default Tasks