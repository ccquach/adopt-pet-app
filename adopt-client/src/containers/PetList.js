import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { loadPets, addPet } from '../actions/index';
import Pet from '../components/Pet';
import NewPetForm from './NewPetForm';
import './PetList.css';

class PetList extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }
  componentDidMount() {
    this.props.loadPets();
  }
  handleAdd(val) {
    this.props.addPet(val);
  }
  render () {
    // debugger;
    let pets = this.props.pets.map(pet => (
      <Pet
        key={pet._id}
        pet={pet}
      />
    ));
    return(
      <div>
        <Route exact path="/pets/new" component={props => (
          <NewPetForm { ...props } onSubmit={ this.handleAdd } />
        )} />
        <Route exact path="/pets" component={() => (
          <div className="pet-list">
            {pets}
          </div>
        )} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger;
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { loadPets, addPet })(PetList);