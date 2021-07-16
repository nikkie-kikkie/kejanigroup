import React from 'react';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Signup from './components/signup/Signup';
import DashBoard from './components/DashBoard/Dashboard';
import LogIn from './components/Log-In/Login';
import AddApartments from './components/AddApartments';
import Apartments from './components/Apartments';
import EditApartment from './components/EditApartment';
import { GlobalStyles } from './GlobalElements';
import './App.css'

function App() {
  return (
    <div className="app">
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/home" component={DashBoard} />
        <Route exact path="/" component={Signup} />
        <Route path="/Log-In/Login" component={LogIn} />
        <Route path="/AddApartments" component={AddApartments}/>  
        <Route path="/Apartments" component={Apartments}/>  
        <Route path="/EditApartment" component={EditApartment}/>  
      </Switch>  
    </Router>
    </div>
  );
}

export default App;
