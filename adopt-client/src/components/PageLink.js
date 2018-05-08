import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PageLink.css';

const PageLink = ({ onPageChange, className, path, text }) => (
  <li 
    className={className ? `page-number ${className}` : 'page-number'} 
    onClick={onPageChange}
  >
    <Link to={path}>
      {text}
    </Link>
  </li>
);

PageLink.defaultProps = {
  onPageChange: () => {},
  className: '',
  path: '',
  text: ''
};

PageLink.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  path: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.element
  ])
};

export default PageLink;