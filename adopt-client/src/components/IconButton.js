import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';
import 'font-awesome/css/font-awesome.min.css';

const IconButton = ({ type, onClick }) => {
  const buttonProps = {
    close: {
      icon: "X",
      class: "close-button"
    },
    edit: {
      icon: <i className="fa fa-edit"></i>,
      class: "item-button edit-button"
    },
    delete: {
      icon: <i className="fa fa-trash"></i>,
      class: "item-button delete-button"
    }
  }
  return (
    <button
      type="button"
      className={`icon-button ${buttonProps[type].class}`}
      onClick={onClick}
    >
      {buttonProps[type].icon}
    </button>
  );
};
IconButton.defaultProps = {
  onClick: () => {}
};
IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default IconButton;