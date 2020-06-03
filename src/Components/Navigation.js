import React from 'react';
import { NavLink } from 'react-router-dom';

//The Navigation function sets the Nav links for each of the Nav buttons on the page. 

const Navigation = (props) => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink exact to="/cats">Cats</NavLink></li>
        <li><NavLink exact to="/dogs">Dogs</NavLink></li>
        <li><NavLink exact to="/computers">Computers</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;