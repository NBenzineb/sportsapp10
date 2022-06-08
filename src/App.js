import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import Workouts from "./components/workouts";
import Login from './components/login';
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

function App() {
 
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* <Route path="/" exact component={Myworkouts} /> */}
          <Route path="/workouts" element={<Workouts/>} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/" element={<ExercisesList/>} />
          <Route path="/edit/:id" element={<EditExercise/>} />
          <Route path="/create" element={<CreateExercise/>} />
          <Route path="/user" element={<CreateUser/>} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;



