import React, { useState } from 'react';
import Header from './component/Header'
import Tasks from './component/Tasks'
import './App.css';
//import Button from './component/Button';

function App () {

  //const name = 'Joe'
  //const x = true
  
  return (
    <div className="container">
        <Header/>
        {/*<h1>List</h1>
        <h2>Set {x ? 'Yes' : name }</h2>*/}
        <Tasks/>
    </div>
  );
}



export default App;
