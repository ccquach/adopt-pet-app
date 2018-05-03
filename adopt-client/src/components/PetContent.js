import React from 'react';
import './PetContent.css';

const PetContent = ({ pet }) => {
  const { name, age, gender, color, breed, img, created_date } = pet;
  const availableDate = new Date(created_date).toDateString();
  const genderDisplay = {
    "M": "Male",
    "F": "Female"
  };
  return (
    <div className="pet-item-content">
      <p>
        <span className="pet-content-label">Available since</span>: {availableDate}
      </p>
      <p>
        <span className="pet-content-label">Name</span>: {name}
      </p>
      <p>
        <span className="pet-content-label">Age</span>: {age} years
      </p>
      <p>
        <span className="pet-content-label">Gender</span>: {genderDisplay[gender]}
      </p>
      <p>
        <span className="pet-content-label">Color</span>: {color}
      </p>
      <p>
        <span className="pet-content-label">Breed</span>: {breed}
      </p>
    </div>
  );
}

export default PetContent;