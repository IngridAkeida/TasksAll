import React from "react";

import ClearIcon from '@mui/icons-material/Clear';

const Task = ({task, onDelete, onToggle}) => {
    return(
        <div className="task" 
            onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}{' '}
                    <ClearIcon 
                        style={{
                            color: 'red',
                            cursor: 'pointer' }}
                        onClick={() => onDelete(task.id)}
                    />
            </h3>
            <p>{task.kind}</p>
        </div>
    )
}

export default Task