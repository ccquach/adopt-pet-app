import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import PetDisplay from './PetDisplay';
import { petPropTypes } from '../../utils/propTypeValues';
import './PetDisplayModal.css';

Modal.setAppElement("#root");

const PetDisplayModal = ({ match, pets, isOpen, onClose }) => {
  const id = match.params.id;
  const pet = pets.find(pet => pet._id === id);
  if (!pet) {
    return <span />;
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={`${pet.name} display modal`}
      overlayClassName="pet-display-modal-overlay"
      className="pet-display-modal-content"
    >
      <PetDisplay pet={pet} onClose={onClose} />
    </Modal>
  );
};
PetDisplayModal.defaultProps = {
  pets: [],
  isOpen: false,
  onClose: () => {}
};
PetDisplayModal.propTypes = {
  match: PropTypes.object.isRequired,
  pets: PropTypes.arrayOf(petPropTypes).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default PetDisplayModal;