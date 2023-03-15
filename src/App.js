/**
 * @author Firstname Lastname <firstname.lastname@example.com>
 * @file Description
 * @desc Created on 2023-03-14 5:37:47 pm
 * @copyright APPI SASU
 */
import './App.css';
import Home from './Components/HOME/home';
import { Routes, Route } from "react-router-dom";

import { DynamicItem, Sidebar, dummyData } from "./Components/NAVIGATION/";
import Crm from './Components/CRM/crm';
import Dashboard from './Components/DASHBOARD/Dashboard';

function App() {
  return (
      <div id="main">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          {dummyData &&
            dummyData.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<DynamicItem page={item.title} />}
              />
            ))}

            <Route path="/crm" element={<Crm/>}/>
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
