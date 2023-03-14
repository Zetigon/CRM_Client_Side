/**
 * @author Firstname Lastname <firstname.lastname@example.com>
 * @file Description
 * @desc Created on 2023-03-14 5:37:47 pm
 * @copyright APPI SASU
 */
import './App.css';
import createRoot from "react-dom";

import NavBar from "./Components/NAVIGATION/NAVBAR/Navbar";
import Routes from './Routes/PublicRoute'


function App() {
  return (
    <div className="App">
  <Routes>
  
  <NavBar/>
    
  </Routes>
    </div>
  );
}

export default App;
