import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = props => (
  <header>
    <h1>
      <Link to="/pets">
        <i className="fa fa-paw"></i>
        <span>Adopt a Pet App</span>
      </Link>
    </h1>
    <nav>
      <li>
        <Link to="/pets">View Pets</Link>
      </li>
      <li>
        <Link to="/pets/new">Add Pet</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </nav>
  </header>
)

export default Navbar;