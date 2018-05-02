export const LOAD_PETS   = "LOAD_PETS";
export const ADD_PET    = "ADD_PET";
export const SHOW_PET   = "SHOW_PET";
export const UPDATE_PET = "UPDATE_PET";
export const DELETE_PET = "DELETE_PET";

const API_URL = 'http://localhost:3001/api/pets/';

function handleLoad(data) {
  // debugger;
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

export function loadPets() {
  // debugger;
  return dispatch => {
    return fetch(API_URL)
      .then(res => res.json())
      .then(data => dispatch(handleLoad(data)))
      .catch(err => console.log('Something went wrong.', err));
  };
}

export function addPet(pet) {
  debugger;
  return dispatch => {
    return fetch(API_URL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(pet)
    })
      .then(res => res.json())
      .then(data => dispatch(handleAdd(data)))
      .catch(err => console.log('Something went wrong.', err));
  }
}