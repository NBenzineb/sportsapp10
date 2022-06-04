const router = require('express').Router();
let Workout = require('../models/workout');
let data = ([
  {   "bodypart": "full",
      "name": "Body Burner",
      "logo": "./full.png",
      "exercises": [
        "Warm-Up: 50 x Star Jumps",
        "3 Sets of:",
        "   10 x Lunges (each side)",
        "   5 x Inchworm Press-Ups",
        "   20 x Mountain Climbers",
        "   5 x Jump Squats",
        "Cool-Down: 5 Minutes Jog"
      ]
    },
    
    {
      "bodypart": "full",
      "name": "Full Body Tone",
      "logo": "./full.png",
      "exercises": [
        "Warm-Up: 5 Minutes Skipping",
        "5 Sets of:",
        "   10 x Crunches",
        "   10 x Low Walk",
        "   10 x Superman Crunches",
        "   1 Minute Plank",
        "Cool-Down: 10 x Quiet Burpees"
      ]
    },
  
    {
      "bodypart": "lower",
      "name": "Booty Beautiful",
      "logo": "./lower.png",
      "exercises": [
        "Warm-Up: 50 x Star Jumps",
        "3 Sets of:",
        "   10 x Sumo Squats",
        "   5 x Squat Thrusters",
        "   20 x Butterfly Kicks",
        "   5 x Deadlifts",
        "Cool-Down: 5 Minutes Jog"
      ]
    },
  
    {
      "bodypart": "lower",
      "name": "Luscious Legs",
      "logo": "./lower.png",
      "exercises": [
        "Warm-Up: 5 Minutes Skipping",
        "5 Sets of:",
        "   10 x Calf Raises",
        "   10 x Jump Lunges",
        "   5 x Lateral Lunges (each side)",
        "   5 x Single Leg Deadlifts (each side)",
        "Cool-Down: 10 x Quiet Burpees"
      ]
    },
  
    {"bodypart": "upper",
      "name": "Chest & Abs",
      "logo": "./upper.png",
      "exercises": [
        "Warm-Up: 50 x Star Jumps",
        "3 Sets of:",
        "   10 x Diamond Press-Ups",
        "   5 x V-Sits",
        "   20 x Kettlebell Swings",
        "   5 x Chin-Ups",
        "Cool-Down: 5 Minutes Jog"
      ]
    },
  
    {"bodypart": "upper",
      "name": "Dream Arms",
      "logo": "./upper.png",
      "exercises": [
        "Warm-Up: 5 Minutes Skipping",
        "5 Sets of:",
        "   10 x Bicep Curls",
        "   10 x Tricep Curls",
        "   10 x Lateral Raises",
        "   10 x Dips",
        "Cool-Down: 10 x Quiet Burpees"
      ]
    }
  ])

router.route('/').get((req, res) => {
  console.log(req.body)
  let upper = data.filter(entry => entry.bodypart === "upper");
  res.json(upper);
  // Workout.find({bodypart: `${req.params.bodypart}`})
  //   .then(workouts => res.json(workouts))
  //   .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Workout.findById(req.params.id)
      .then(workout => res.json(workout))
      .catch(err => res.status(400).json('Error: ' + err));
});
  

module.exports = router;

