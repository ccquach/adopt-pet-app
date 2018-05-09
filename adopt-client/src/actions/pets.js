import { ajaxErrorHandler as errorHandler } from '../utils/errorHandlers';
import { API_URL } from '../utils/constants';

const URL = API_URL.pets;

export const LOAD_PETS = "LOAD_PETS";
export const ADD_PET = "ADD_PET";
export const UPDATE_PET = "UPDATE_PET";
export const DELETE_PET = "DELETE_PET";
export const REQUEST_PAGE_PETS = "REQUEST_PAGE_PETS";
export const RECEIVE_PAGE_PETS = "RECEIVE_PAGE_PETS";

const handleLoad = pets => ({
  type: LOAD_PETS,
  pets
})

const handleAdd = pet => ({
  type: ADD_PET,
  pet
})

const handleUpdate = pet => ({
  type: UPDATE_PET,
  pet
})

const handleDelete = data => ({
  type: DELETE_PET,
  data
})

const requestPagePets = page => ({
  type: REQUEST_PAGE_PETS,
  page
})

const receivePagePets = result => ({
  type: RECEIVE_PAGE_PETS,
  result
})

export const loadPets = () => dispatch => {
  return fetch(URL)
    .then(errorHandler)
    .then(data => dispatch(handleLoad(data)))
    .catch(err => console.log('Something went wrong.', err));
}

export const addPet = pet => dispatch => {
  return fetch(URL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(pet)
  })
    .then(errorHandler)
    .then(data => dispatch(handleAdd(data)))
    .catch(err => console.log('Something went wrong.', err));
}

export const updatePet = (pet, id) => dispatch => {
  return fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(pet)
  })
    .then(errorHandler)
    .then(updatedPet => dispatch(handleUpdate(updatedPet)))
    .catch(err => console.log('Something went wrong.', err));
}

export const deletePet = id => dispatch => {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE'
  })
    .then(errorHandler)
    .then(data => dispatch(handleDelete(data)))
    .catch(err => console.log('Something went wrong.', err));
}

export const getPagePets = page => dispatch => {
  dispatch(requestPagePets(page))
  return fetch(`${URL}?page=${page}`)
    .then(errorHandler)
    .then(data => dispatch(receivePagePets(data)))
    .catch(err => console.log('Something went wrong.', err));
}