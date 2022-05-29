import './App.css';
import BodyPartSelector from './components/bodyPartSelector';
import React, { useState } from "react";

function App() {
  const [selectedBodyParts, updateSelectedBodyParts] = useState({}); 

  return (
    <div className="App">
      <BodyPartSelector updateSelected={updateSelectedBodyParts}/>
      <p>{JSON.stringify(selectedBodyParts)}</p>
    </div>
  );
}

export default App;
