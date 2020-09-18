import React,{useState, useEffect} from 'react';
import './App.css';
import io from 'socket.io-client';

function App() {

  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    console.log('Socket is running?')
    socket.on('Welcome', data => console.log(data));

    return () => socket.disconnet(true);
  }, []);

  return (
    <div className="App">
      <h1>Socket Test</h1>
    </div>
  );
}

export default App;
