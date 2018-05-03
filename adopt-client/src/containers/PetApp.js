import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { loadPets, addPet, updatePet, deletePet } from '../actions/pets';
import { showModal, hideModal } from '../actions/modals';
import PetList from './PetList';
import PetForm from './PetForm';
import PetDisplayModal from '../components/modals/PetDisplayModal';
import './PetApp.css';

class PetApp extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
  openModal(id) {
    this.props.showModal();
    this.props.history.push(`/pets/${id}`);
  }
  closeModal() {
    this.props.hideModal();
    this.props.history.push("/pets");
  }
  render () {
    // debugger;
    return(
      <div>
        <Switch>
          {/* create */}
          <Route exact path="/pets/new" render={props => (
            <PetForm 
              { ...props } 
              type="New" 
              onSubmit={this.handleAdd} 
            />
          )} />
          {/* update */}
          <Route path="/pets/:id/edit" render={props => (
            <PetForm 
              { ...props } 
              type="Edit" 
              pets={this.props.pets} 
              onSubmit={this.handleUpdate} 
            />
          )} />
          {/* show */}
          <Route path="/pets/:id" render={props => (
            <div>
              <PetList
                { ...props }
                pets={this.props.pets}
                handleDelete={this.handleDelete}
                handleShow={this.openModal}
              />
              <PetDisplayModal
                { ...props }
                pets={this.props.pets}
                isOpen={this.props.modalIsOpen}
                onClose={this.closeModal}
              />
            </div>
          )} />
          {/* load */}
          <Route exact path="/pets" render={props => (
            <PetList
              { ...props }
              pets={this.props.pets}
              handleDelete={this.handleDelete}
              handleShow={this.openModal}
            />
          )} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger;
  return {
    pets: state.pets,
    modalIsOpen: state.modals,
  };
}

export default connect(
  mapStateToProps, 
  { loadPets, addPet, updatePet, deletePet, showModal, hideModal }
)(PetApp);