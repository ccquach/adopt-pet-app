import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { petPropTypes } from '../utils/propTypeValues';
import Pet from '../components/Pet';
import './PetList.css';

class PetList extends Component {
  static defaultProps = {
    pets: [],
    handleShow: () => {},
    handleDelete: () => {}
  };
  static propTypes = {
    pets: PropTypes.arrayOf(petPropTypes),
    handleShow: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };
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