import React from 'react';
import { Link } from 'react-router-dom';
import './Pet.css';
import PetContent from './PetContent';
import IconButton from './IconButton';

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
        <Link to={`/pets/${pet._id}`}>
          <img src={pet.img} alt={pet.name} onClick={onShow} />
        </Link>
      </div>
      <PetContent pet={pet} />
    </div>
  </div>
)

export default Pet;