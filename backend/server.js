const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require("passport");


require('dotenv').config();

const app = express();
const port = process.env.PORT || 4567;

app.use(cors());
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const workoutsRouter = require('./routes/workouts');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/workouts', workoutsRouter);
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
