import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";


import Workouts from "./components/workouts";
import Homepage from './components/homepage';

import Login from './components/login';


import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

function App() {
 
  const [user, setLoginUser] = useState({
  })
  return (
    <div className="App">
      <Router>
        
      <Navbar />
      <div className="container">
        <Routes>
          {/* <Route path="/" exact component={Myworkouts} /> */}
          {/* <Route exact path="/workouts">
          {user && user._id ? <Workouts/>:<Login/> }<Workouts/></Route> */}
          <Route path="/users/login" element= {<Login/>} />
          <Route path="/workouts" element={<Workouts/>} />
          <Route path="/edit/:id" element={<EditExercise/>} />
          <Route path="/create" element={<CreateExercise/>} />
          <Route path="/user" element={<CreateUser/>} />
          <Route path="/log" element={<ExercisesList/>} />
          <Route path="/" element={<Homepage/>} />
        </Routes>
        </div>
      </Router>

      {/* <Login setLoginUser={setLoginUser}/> */}

    </div>
  );
}

export default App;




