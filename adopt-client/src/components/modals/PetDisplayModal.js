import React from 'react';
import Modal from 'react-modal';
import './PetDisplayModal.css';
import PetDisplay from './PetDisplay';

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

export default PetDisplayModal;