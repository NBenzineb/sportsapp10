import React from 'react';

function WorkoutCard({workoutName, workoutLogo, exercises}) {
  const exerciseArray = exercises.split(",")
  // const imageStyles = { maxWidth: 10, maxHeight: 10 };


  return (
    <div className="card">
      <h3>{workoutName}</h3>
      <img styles={{ width: 10, height: 10, borderRadius: 10 }} src= {workoutLogo} alt={''}/>
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