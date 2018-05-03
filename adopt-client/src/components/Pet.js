import React from 'react';
import { Link } from 'react-router-dom';
import './Pet.css';
import PetContent from './PetContent';
import 'font-awesome/css/font-awesome.min.css';

const Pet = ({ pet, onShow, onDelete }) => (
  <div className="pet-item-container">
    <button
      className="update-button item-button"
      type="button"
    >
      <Link to={`/pets/${pet._id}/edit`}>
        <i className="fa fa-edit"></i>
      </Link>
    </button>
    <button
      className="delete-button item-button"
      type="button"
      onClick={onDelete}
    >
      <i className="fa fa-trash"></i>
    </button>
    <div className="pet-item">
      <div  className="pet-item-image">
        <Link to={`/pets/${pet._id}`}>
          <img src={pet.img} alt={pet.name} onClick={onShow} />
        </Link>
      </div>
      <PetContent pet={pet} />
    </div>
  </div>
)

export default Pet;