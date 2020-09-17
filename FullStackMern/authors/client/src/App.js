import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';
import NoAuthor from './views/NoAuthor';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <AddAuthor path="/add/" />
        <EditAuthor path="/edit/:id" />
        <NoAuthor path="/error/" />
      </Router>
    </div>
  );
}

export default App;
