import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Pagination.css';

const Pagination = ({ currentPage, petTotal, onPageChange }) => {
  const petsPerPage = 12;
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(petTotal / petsPerPage); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map(number => (
    <li
      key={number}
      onClick={(e) => onPageChange(e.target.id)}
    >
      <Link id={number} to={`/pets/page/${number}`}>{number}</Link>
    </li>
  ));
  return (
    <ul id="page-numbers">
      {renderPageNumbers}
    </ul>
  );
};
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  petTotal: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;