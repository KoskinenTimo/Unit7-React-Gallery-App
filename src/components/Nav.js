import React from 'react';
import {NavLink} from 'react-router-dom';

// A simple navigation component for 3 default searches
const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/search/apples">Apples</NavLink></li>
      <li><NavLink to="/search/oranges">Oranges</NavLink></li>
      <li><NavLink to="/search/plums">Plums</NavLink></li>
    </ul>
  </nav>
);

export default Nav;