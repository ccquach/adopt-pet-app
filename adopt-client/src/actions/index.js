export const GET_PETS   = "GET_PETS";
export const ADD_PET    = "ADD_PET";
export const SHOW_PET   = "SHOW_PET";
export const UPDATE_PET = "UPDATE_PET";
export const DELETE_PET = "DELETE_PET";

const API_URL = 'http://localhost:3001/api/pets/';

function handlePets(data) {
  // debugger;
  return {
    type: GET_PETS,
    data
  };
}

export function getPets() {
  // debugger;
  return dispatch => {
    return fetch(API_URL)
      .then(res => res.json())
      .then(data => dispatch(handlePets(data)))
      .catch(err => console.log('Something went wrong.', err));
  };
}