import React from 'react';
import Home from "./components/Home";
import {Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import Investment from './components/Investment';
import Advice from './components/Advice';
import Team from './components/Team';
import Login from './components/Login';
import Register from './components/Register';
import Equity from './components/Equity';
import Gold from './components/Gold';

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/investment' Component={Investment} />
        <Route path='/advice' Component={Advice} />
        <Route path='/team' Component={Team} />
        <Route path='/equity' Component={Equity}/>
        <Route path='/gold' Component={Gold}/>
      </Routes>
{/*     
    <div><Home/></div>
    <div><Investment/></div>
    <div><Advice/></div>
    <div><Team/></div>
    <div><Login/></div>
    <div><Register/></div>

     */}
     </>
    
  );
}

export default App;
