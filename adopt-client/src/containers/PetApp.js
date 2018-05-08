import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { loadPets, addPet, updatePet, deletePet, getPagePets } from '../actions/pets';
import { showModal, hideModal } from '../actions/modals';
import PetList from './PetList';
import PetForm from './PetForm';
import PetDisplayModal from '../components/modals/PetDisplayModal';
import Pagination from './Pagination';
import './PetApp.css';

class PetApp extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    const currentPage = this.props.match.params.page;
    if (currentPage) {
      this.props.getPagePets(currentPage);
    }
  }
  handleAdd(val) {
    const perPage = 12;
    const lastPage = Math.ceil((this.props.totalPets + 1) / perPage);
    this.props.addPet(val, lastPage);
    this.props.history.push(`/pets/page/${lastPage}`);
  }
  handleUpdate(pet, id) {
    this.props.updatePet(pet, id);
    this.props.history.push(`/pets/page/${this.props.currentPage}`);
  }
  handleDelete(id) {
    this.props.deletePet(id);
    this.props.history.push(`/pets/page/1`);
  }
  handlePageChange(page) {
    this.props.getPagePets(page);
  }
  openModal(id) {
    this.props.showModal();
    this.props.history.push(`/pets/${id}`);
  }
  closeModal() {
    this.props.hideModal();
    this.props.history.push(`/pets/page/${this.props.currentPage}`);
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
          <Route exact path="/pets/:id/edit" render={props => (
            <PetForm 
              { ...props } 
              type="Edit" 
              pets={this.props.pets} 
              onSubmit={this.handleUpdate} 
            />
          )} />
          {/* show */}
          <Route exact path="/pets/:id" render={props => (
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
            <Route exact path="/pets/page/:page" render={props => (
              <div>
                <PetList
                  { ...props }
                  pets={this.props.pets}
                  handleDelete={this.handleDelete}
                  handleShow={this.openModal}
                />
                <Pagination
                  currentPage={+this.props.currentPage}
                  petTotal={this.props.totalPets}
                  onPageChange={this.handlePageChange}
                />
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
    pets: state.pets.data,
    totalPets: +state.pets.totalCount,
    currentPage: +state.pets.currentPage,
    modalIsOpen: state.modals
  };
}

export default connect(
  mapStateToProps, 
  { loadPets, addPet, updatePet, deletePet, getPagePets, showModal, hideModal }
)(PetApp);