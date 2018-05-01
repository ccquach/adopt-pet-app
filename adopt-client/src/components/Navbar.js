import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <header>
    <h1>Adopt a Pet App</h1>
    <nav>
      <li>
        <Link to="/pets">View Pets</Link>
      </li>
      <li>
        <Link to="/pets/new">Add Pet</Link>
      </li>
    </nav>
  </header>
)

export default Navbar;