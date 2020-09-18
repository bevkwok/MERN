import React from 'react';
import './App.css';
import Main from './views/Main';
import AddPlayer from './views/AddPlayer';
import { Router } from '@reach/router';
import EditPlayer from './views/EditPlayer';
import Error from './views/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/players/list" />
        <AddPlayer path="/players/addplayer" />
        <EditPlayer path="/players/editplayer/:id" />
        <Error path="/error" />
      </Router>
    </div>
  );
}

export default App;
