import React from 'react';
import PropTypes from 'prop-types';
import './FlashMessage.css';

const FlashMessage = ({ message, className }) => {
  const label = {
    "alert-danger": "ERROR!",
    "alert-warning": "WARNING!",
    "alert-success": "SUCCESS!"
  };

  return (
    <div className={`flash-message ${className}`}>
      <p>
        <span className="label">{label[className]}</span>
        <span className="message">{message}</span>
      </p>
    </div>
  );
};

FlashMessage.defaultProps = {
  message: '',
  className: ''
};

FlashMessage.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default FlashMessage;