import React from 'react';
import PropTypes from 'prop-types';
import PetContent from '../PetContent';
import IconButton from '../IconButton';
import { petPropTypes } from '../../utils/propTypeValues';
import './PetDisplay.css';

const PetDisplay = ({ pet, onClose }) => (
  <div className="pet-display-container">
    <IconButton 
      type="close" 
      onClick={onClose} 
    />
    <div className="pet-display-image">
      <img src={pet.img} alt={pet.name} />
    </div>
    <PetContent pet={pet} />
  </div>
);
PetDisplay.defaultProps = {
  onClose: () => {}
};
PetDisplay.propTypes = {
  pet: petPropTypes,
  onClose: PropTypes.func.isRequired
};

export default PetDisplay;