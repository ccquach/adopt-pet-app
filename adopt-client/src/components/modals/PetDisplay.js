import React from 'react';
import './PetDisplay.css';
import PetContent from '../PetContent';
import IconButton from '../IconButton';

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

export default PetDisplay;