import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active" onClick={() => handleLinkClick('dashboard')}>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active" onClick={() => handleLinkClick('settings')}>
              
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" activeClassName="active" onClick={() => handleLinkClick('logout')}>
              
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
