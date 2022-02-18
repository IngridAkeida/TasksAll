import React from "react";
import PropTypes from 'prop-types'
import Button from './Button.jsx'

const Header = ({title}) =>{
    return(
        <header className="header">

            <h1> {title} </h1>
            <Button color='green' text='Add'/>
            {/*<Button color='red' text='Hello2'/>*/}
            {/*<Button color='blue' text='Hello3'/>*/}
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task',
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
//style={headingStyle}
/*const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}*/


export default Header