import React, { Component } from 'react';
import './PetList.css';
import Pet from '../components/Pet';

class PetList extends Component {
  handleShow(id) {
    this.props.handleShow(id);
  }
  handleShowEdit(id) {
    this.props.history.push(`/pets/${id}/edit`);
  }
  handleDelete(id) {
    this.props.handleDelete(id);
  }
  render() {
    let pets = this.props.pets.map(pet => (
      <Pet
        key={pet._id}
        pet={pet}
        onShow={this.handleShow.bind(this, pet._id)}
        onEdit={this.handleShowEdit.bind(this, pet._id)}
        onDelete={this.handleDelete.bind(this, pet._id)}
      />
    ));
    return (
      <div className="pet-list">
        {pets}
      </div>
    );
  }
};

export default PetList;