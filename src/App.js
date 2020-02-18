import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route path="/lightstream-theme" exact component={Home} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} /> 
      </Switch>      
    </div>
    </Router>
    );
  }
  
  export default App;
  