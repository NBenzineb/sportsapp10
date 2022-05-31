import React from 'react';

function WorkoutCard({workoutName, workoutLogo, exercises}) {
  const exerciseArray = exercises.split(",")

  return (
    <div className="card">
      <h3>{workoutName}</h3>
      <img src= {workoutLogo}/>
      <ul className="exerciseList">
        {exerciseArray.map((exercise) => (
          <li>{exercise}</li>
        ))}
      </ul>
      <button>Done</button>
    </div>
   
  )

}

export default WorkoutCard;