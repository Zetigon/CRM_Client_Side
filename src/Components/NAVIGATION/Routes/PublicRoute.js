import NavBar from "../Components/NAVIGATION/NAVBAR/Navbar";
import React from 'react';
import { Router, Route } from 'react-router-dom';
import home from "../../HOME/home";


const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={home} />
      
    </Router>
  );
};

export default Routes;
