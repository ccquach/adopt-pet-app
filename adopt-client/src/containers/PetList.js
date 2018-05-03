import React, { Component } from 'react';
import './PetList.css';
import Pet from '../components/Pet';

class PetList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id) {
    this.props.handleDelete(id);
  }
  render() {
    let pets = this.props.pets.map(pet => (
      <Pet
        key={pet._id}
        pet={pet}
        onDelete={this.handleDelete.bind(this, pet._id)}
        onShow={this.props.handleShow}
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