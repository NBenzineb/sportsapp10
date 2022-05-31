import './App.css';
import React, { useState } from "react";

import BodyPartSelector from './components/bodyPartSelector';
import WorkoutList from './components/workoutList';


function App() {
  const [selectedBodyParts, updateSelectedBodyParts] = useState({}); 

  return (
    <div className="App">
      <BodyPartSelector updateSelected={updateSelectedBodyParts}/>
      <p>{JSON.stringify(selectedBodyParts)}</p>
      <WorkoutList selected={selectedBodyParts}/>
    </div>
  );
}

export default App;
