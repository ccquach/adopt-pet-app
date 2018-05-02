import React from 'react';
import { Link } from 'react-router-dom';
import './Pet.css';
import 'font-awesome/css/font-awesome.min.css';

const Pet = ({ pet, onDelete }) => {
  const availableDate = new Date(pet.created_date).toDateString();
  const gender = {
    "M": "Male",
    "F": "Female"
  };
  return (
    <div className="pet-item-container">
      <button
        className="update-button item-button"
        type="button"
      >
        <Link to={`/pets/edit/${pet._id}`}>
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
          <img src={pet.img} alt={pet.name} />
        </div>
        <div className="pet-item-content">
          <p>
            <span className="pet-content-label">Available since</span>: {availableDate}
          </p>
          <p>
            <span className="pet-content-label">Name</span>: {pet.name}
          </p>
          <p>
            <span className="pet-content-label">Age</span>: {pet.age} years
          </p>
          <p>
            <span className="pet-content-label">Gender</span>: {gender[pet.gender]}
          </p>
          <p>
            <span className="pet-content-label">Color</span>: {pet.color}
          </p>
          <p>
            <span className="pet-content-label">Breed</span>: {pet.breed}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pet;