import React from 'react';
import {NavLink} from 'react-router-dom';

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