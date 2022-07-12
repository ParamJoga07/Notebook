import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('slategray');
  
  const toggleMode =()=>{
    if(mode==='slategray'){
      setMode('dark');
      document.body.style.backgroundColor ='rgb(7, 115, 115)';
    }else{
      setMode('slategray');
      document.body.style.backgroundColor ='slategray';
    }
  }

    return (
      <>
      <Router>
         <Navbar toggleMode={toggleMode}/>
         
         <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </> 
    );
}

export default App;
