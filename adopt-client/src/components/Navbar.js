import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = props => (
  <header>
    <h1>
      <i className="fa fa-paw"></i>
      Adopt a Pet App
    </h1>
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