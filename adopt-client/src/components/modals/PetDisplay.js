import React from 'react';
import './PetDisplay.css';
import PetContent from '../PetContent';

const PetDisplay = ({ pet, onClose }) => (
  <div className="pet-display-container">
    <button 
      className="close-button" 
      type="button" 
      onClick={onClose}
    >
     X
    </button>
    <div className="pet-display-image">
      <img src={pet.img} alt={pet.name} />
    </div>
    <PetContent pet={pet} />
  </div>
);

export default PetDisplay;