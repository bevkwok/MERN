import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './components/Home';
import Num from './components/Num';
import Word from './components/Word';


function App() {



  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Num path="/:x" />
        <Word path="/:x/:wcolor/:bcolor" />
      </Router>
    </div>
  );
}

export default App;
