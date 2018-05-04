import React from 'react';
import './Pet.css';
import PetContent from './PetContent';
import IconButton from './IconButton';
import notFoundImg from '../images/img_not_found.jpeg';

const Pet = ({ pet, onShow, onEdit, onDelete }) => (
  <div className="pet-item-container">
    <IconButton
      type="edit"
      onClick={onEdit}
    />
    <IconButton
      type="delete"
      onClick={onDelete}
    />
    <div className="pet-item">
      <div className="pet-item-image">
        <img 
          src={pet.img ? pet.img : notFoundImg} 
          alt={pet.name} 
          onError={(e) => {
            e.target.onError = null;
            e.target.src = notFoundImg
          }}
          onClick={onShow} 
        />
      </div>
      <PetContent pet={pet} />
    </div>
  </div>
)

export default Pet;