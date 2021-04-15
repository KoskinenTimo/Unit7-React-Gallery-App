import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/apples">Apples</NavLink></li>
      <li><NavLink to="/oranges">Oranges</NavLink></li>
      <li><NavLink to="/plums">Plums</NavLink></li>
    </ul>
  </nav>
);

export default Nav;