import React from "react";

import ClearIcon from '@mui/icons-material/Clear';

const Task = ({task}) => {
    return(
        <div className="task">
            <h3>
                {task.text}
                    <ClearIcon 
                        style={{
                            color: 'red',
                            cursor: 'pointer' }}/>
                </h3>
            <p>{task.kind}</p>
        </div>
    )
}

export default Task