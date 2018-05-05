import { ajaxErrorHandler as errorHandler } from '../utils/errorHandlers';
import { API_URL } from '../utils/constants';

const URL = API_URL.pets;

export const LOAD_PETS  = "LOAD_PETS";
export const ADD_PET    = "ADD_PET";
export const UPDATE_PET = "UPDATE_PET";
export const DELETE_PET = "DELETE_PET";

function handleLoad(data) {
  return {
    type: LOAD_PETS,
    data
  };
}

function handleAdd(pet) {
  return {
    type: ADD_PET,
    pet
  };
}

function handleUpdate(pet) {
  return {
    type: UPDATE_PET,
    pet
  };
}

function handleDelete(id) {
  return {
    type: DELETE_PET,
    id
  };
}

export function loadPets() {
  return dispatch => {
    return fetch(URL)
      .then(errorHandler)
      .then(data => dispatch(handleLoad(data)))
      .catch(err => console.log('Something went wrong.', err));
  };
}

export function addPet(pet) {
  return dispatch => {
    return fetch(URL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(pet)
    })
      .then(errorHandler)
      .then(newPet => dispatch(handleAdd(newPet)))
      .catch(err => console.log('Something went wrong.', err));
  };
}

export function updatePet(pet, id) {
  return dispatch => {
    return fetch(URL + id, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(pet)
    })
      .then(errorHandler)
      .then(updatedPet => dispatch(handleUpdate(updatedPet)))
      .catch(err => console.log('Something went wrong.', err));
  };
}

export function deletePet(id) {
  return dispatch => {
    return fetch(URL + id, {
      method: 'DELETE'
    })
      .then(errorHandler)
      .then(data => dispatch(handleDelete(id)))
      .catch(err => console.log('Something went wrong.', err));
  };
}