import React, {useState} from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';


function App() {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [boxes, setBoxes] = useState([{
    color: "",
    size: ""
  }]);
  const addBox = (color, size) => {
    setBoxes(color, size);
    setColor(color);
    setSize(size);
  }

  return (
    <div className="App">
      <BoxForm color={color} setColor={setColor} size={size} setSize={setSize} addBox={addBox} setBoxes={setBoxes} boxes={boxes} />
      <BoxDisplay color={color} size={size} boxes={boxes} />
    </div>
  );
}

export default App;
