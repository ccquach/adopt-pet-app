import React from 'react';
import './NoResultsFound.css';

const NoResultsFound = props => (
  <div className="empty-icon-container">
    <div className="animation-container">
      <div className="tumbleweed-bounce"></div>
      <div className="pebble1"></div>
      <div className="pebble2"></div>
      <div className="pebble3"></div>
    </div>
    <div>
      <h2>0 results found</h2>
      <p>Sorry! We couldn't find any results.</p>
    </div>
  </div>
);

export default NoResultsFound;