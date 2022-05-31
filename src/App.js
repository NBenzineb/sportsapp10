import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import BodyPartSelector from './components/bodyPartSelector';
import Myworkouts from "./components/myworkouts";


function App() {
  const [selectedBodyParts, updateSelectedBodyParts] = useState({}); 
  

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Myworkouts} />
        <Route path="/allworkouts" component={BodyPartSelector} />
        <Route path="/myworkouts" component={Myworkouts} />
        <Route path="/signin" component={Myworkouts} />
        <Route path="/sign-up" component={Myworkouts} />
      </Routes>
    </Router>
    <BodyPartSelector updateSelected={updateSelectedBodyParts}/>
  <p>{JSON.stringify(selectedBodyParts)}</p>
  
   
    </div>
  );
}

export default App;



