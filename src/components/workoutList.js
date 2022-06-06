import React, { useState, useEffect } from 'react';
import WorkoutCard from './workoutCard.js'


function WorkoutList(props) {
  console.log(props.selected);
  const [data, setData] = useState(0);
  useEffect(() => {
    fetch("http://localhost:4567/workouts")
      .then(res => res.json())
      .then(data => setData(data))
  },
  [props.selected],
  );
    return (
      <h3>{JSON.stringify(data)}</h3>
    )

    
  
}

export default WorkoutList;