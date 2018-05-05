import React from 'react';
import PropTypes from 'prop-types';
import PetContent from './PetContent';
import IconButton from './IconButton';
import notFoundImg from '../images/img_not_found.jpeg';
import { petPropTypes } from '../utils/propTypeValues';
import './Pet.css';

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
Pet.defaultProps = {
  onShow: () => {},
  onEdit: () => {},
  onDelete: () => {}
};
Pet.propTypes = {
  pet: petPropTypes,
  onShow: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Pet;