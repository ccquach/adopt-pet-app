import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { loadPets, addPet, updatePet, deletePet } from '../actions/index';
import Pet from '../components/Pet';
import PetForm from './PetForm';
import './PetList.css';

class PetList extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  componentDidMount() {
    this.props.loadPets();
  }
  handleAdd(val) {
    this.props.addPet(val);
  }
  handleUpdate(pet, id) {
    this.props.updatePet(pet, id);
  }
  handleDelete(id) {
    this.props.deletePet(id);
  }
  render () {
    // debugger;
    let pets = this.props.pets.map(pet => (
      <Pet
        key={pet._id}
        pet={pet}
        onDelete={this.handleDelete.bind(this, pet._id)}
      />
    ));
    return(
      <div>
        <Switch>
          <Route exact path="/pets/new" render={props => (
            <PetForm 
              { ...props } 
              type="New" 
              onSubmit={this.handleAdd} 
            />
          )} />
          <Route path="/pets/edit/:id" render={props => (
            <PetForm 
              { ...props } 
              type="Edit" 
              pets={this.props.pets} 
              onSubmit={this.handleUpdate} 
            />
          )} />
          <Route exact path="/pets" render={() => (
            <div className="pet-list">
              {pets}
            </div>
          )} />
        </Switch>
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

export default connect(mapStateToProps, { loadPets, addPet, updatePet, deletePet })(PetList);