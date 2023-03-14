import NavBar from "../Components/NAVIGATION/NAVBAR/Navbar";
import React from 'react';
import { Router, Route } from 'react-router-dom';


const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={NavBar} />
      
    </Router>
  );
};

export default Routes;
