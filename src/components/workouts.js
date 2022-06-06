import { render } from "@testing-library/react";
import React, { useState } from "react";


import BodyPartSelector from './bodyPartSelector';
import WorkoutList from './workoutList';

function Workouts() {
  const [selectedBodyParts, updateSelectedBodyParts] = useState({"upperBody": false, "lowerBody": false, "fullBody": false}); 
    return (
    <div>
      <BodyPartSelector updateSelected={updateSelectedBodyParts}/>
      <p>{JSON.stringify(selectedBodyParts.bodyParts)}</p>
      <WorkoutList selected={selectedBodyParts.bodyParts}/>
    </div>

)
}

export default Workouts