import React from 'react';
import PropTypes from 'prop-types';
import './FormTitle.css';

const FormTitle = ({ text }) => (
  <h2>{text} Pet Form</h2>
);
FormTitle.defaultProps = {
  text: ''
};
FormTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default FormTitle;