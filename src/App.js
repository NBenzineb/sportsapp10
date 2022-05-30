import './App.css';
import React, { useState } from "react";

import BodyPartSelector from './components/bodyPartSelector';

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
