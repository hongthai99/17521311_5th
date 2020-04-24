import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Contact from './components/contact'
import Skill from './components/skill';
import {Route, Link} from "react-router-dom";
function App() {
  return (
    <div className="">
      <Home/>
       <Contact/>
    </div>
  );
}

export default App;
