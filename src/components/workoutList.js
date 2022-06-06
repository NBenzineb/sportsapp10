import React, { useState, useEffect } from 'react';
import WorkoutCard from './workoutCard.js'


function WorkoutList(props) {

  const [data, setData] = useState([]);
  const removeUnchecked = (raw) => {
    return raw.reduce((output, entry) => {
      const bodyPart = entry.bodyPart
      if (props.selected[bodyPart] === true) {
        output.push(entry);
      }
      console.log(output);
      return output.sort((a, b) => 0.5 - Math.random());
    }, [])

  }


  useEffect(() => {
    fetch("http://localhost:4567/workouts")
      .then(res => res.json())
      .then(all => setData(removeUnchecked(all)))
  },
  [props],
  );
    return (
      <div className="cards">
      {data.map((item) => (
        <WorkoutCard workoutName={`${item.name}`} workoutLogo={`${item.logo}`} exercises={`${item.exercises}`}/>
      ))}
    </div>
    )

    
  
}

export default WorkoutList;