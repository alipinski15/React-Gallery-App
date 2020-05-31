import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink exact to="/cats">Cats</NavLink></li>
        <li><a href='#'>Dogs</a></li>
        <li><a href='#'>Computers</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;