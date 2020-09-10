import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import People from './components/People';
import Planets from './components/Planets';
import { Router } from '@reach/router';

function App() {

  const [item, setItem] = useState({
    itemName: "",
    itemId: ""
  })

  return (
    <div className="App">
      <Main path="/" />
      <Router>
        <Main path="/" />
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
      
    </div>
  );
}

export default App;
