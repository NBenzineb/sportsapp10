import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar"

import Myworkouts from "./components/myworkouts";
import Workouts from "./components/workouts";
import Login from './components/login';
import SignUp from './components/signup';



function App() {
  
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact component={Myworkouts} />
          <Route path="/workouts" element={<Workouts/>} />
          <Route path="/myworkouts" element={<Myworkouts/>} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;



