import React, { Component } from 'react';
import './PetList.css';
import Pet from '../components/Pet';

class PetList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
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
        onShow={this.props.handleShow}
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