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
import Accounts from './Components/CRM/Accounts/accounts';
import Notes from './Components/CRM/Notes/notes';
import Tasks from './Components/CRM/Tasks/tasks';
import Settings from './Components/SETTINGS/settings';

function App() {
  return (
      <div id="main">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
            <Route path="/crm" element={<Crm/>}/>
            <Route path="/accounts" element={<Accounts/>}/>
            <Route path="/notes" element={<Notes/>}/>
            <Route path="/tasks" element={<Tasks/>}/>

            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/settings" element={<Settings/>}/>
          {dummyData &&
            dummyData.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<DynamicItem page = {item.title}/>}
              />
            ))}



        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
