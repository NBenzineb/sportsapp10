import React from 'react';
import "../styles/workoutCard.css"; 

function WorkoutCard({workoutName, workoutLogo, exercises}) {
  const exerciseArray = exercises.split(",");

  return (
    <div className="card">
      <h2>{workoutName}</h2>
      <div className="logoHolder">
        <img src= {workoutLogo} alt={''}/>
      </div>
      <div className="listHolder">
        <ul className="exerciseList">
          {exerciseArray.map((exercise) => (
            <li>{exercise}</li>
          ))}
        </ul>
      </div>
      <button>Done</button>
    </div>
   
  )

}

export default WorkoutCard;