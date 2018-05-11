import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => (
  <div id='oopss'>
    <div id='error-text'>
      <div className='page-not-found-bounce'>
        <div className='r'>
          <span>404</span>
        </div>
        <div className='shadow'></div>
      </div>
      <p>PAGE NOT FOUND</p>
      <p className='hmpg'>
        <Link to="/pets" className='back'>
          Back To Homepage
        </Link>
      </p>
    </div>
  </div>
);

export default PageNotFound;