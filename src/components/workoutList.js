import React from "react";
import upperBody from './workouts/upperbody.json' 
import lowerBody from './workouts/lowerbody.json' 
import fullBody from './workouts/fullbody.json'
import WorkoutCard from './workoutCard.js'


function WorkoutList() {
  // const workouts = upperBody
  // const workouts = lowerBody
  const workouts = fullBody

  return (
      <div className="cards">
        {workouts.map((workout) => (
          <WorkoutCard workoutName={`${workout.workoutName}`} workoutLogo={`${workout.workoutLogo}`} exercises={`${workout.exercises}`}/>
        ))}
      </div>
  );
}

export default WorkoutList;