import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar"
import BodyPartSelector from './components/bodyPartSelector';
import Myworkouts from "./components/myworkouts";
import WorkoutList from './components/workoutList';


function App() {
  const [selectedBodyParts, updateSelectedBodyParts] = useState({}); 
  

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Myworkouts} />
        <Route path="/allworkouts" component={BodyPartSelector} />
        <Route path="/myworkouts" element={<Myworkouts/>} />
        <Route path="/signin" element={<Myworkouts/>} />
        <Route path="/sign-up" element={<Myworkouts/>} />
      </Routes>
    </Router>
    <BodyPartSelector selected={updateSelectedBodyParts}/>
  <p>{JSON.stringify(selectedBodyParts)}</p>
  
      <WorkoutList selected={selectedBodyParts}/>
    </div>
  );
}

export default App;



