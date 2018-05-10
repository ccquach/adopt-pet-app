import { ajaxErrorHandler as errorHandler } from '../utils/errorHandlers';
import { API_URL } from '../utils/constants';
import { sendFlashMessage } from './flashMessage';

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
    .then(data => {
      dispatch(handleAdd(data));
      dispatch(sendFlashMessage('New pet has been added.', 'alert-success'));
    })
    .catch(err => dispatch(sendFlashMessage(`
      Something went wrong when trying to add new pet. { Issue: ${ err.errorMessage } }
    `, 'alert-danger')));
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
    .then(updatedPet => {
      dispatch(handleUpdate(updatedPet));
      dispatch(sendFlashMessage('Pet has been updated.', 'alert-success'));
    })
    .catch(err => dispatch(sendFlashMessage(`
      Something went wrong when trying to update pet. { Issue: ${ err.errorMessage } }
    `, 'alert-danger')));
}

export const deletePet = id => dispatch => {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE'
  })
    .then(errorHandler)
    .then(data => {
      dispatch(handleDelete(data));
      dispatch(sendFlashMessage(data.message, 'alert-success'));
    })
    .catch(err => dispatch(sendFlashMessage(`
      Failed to delete pet. { Issue: ${err.errorMessage} }
    `, 'alert-danger')));
}

export const getPagePets = page => dispatch => {
  dispatch(requestPagePets(page))
  return fetch(`${URL}?page=${page}`)
    .then(errorHandler)
    .then(data => dispatch(receivePagePets(data)))
    .catch(err => dispatch(sendFlashMessage(`
      Failed to load pets. { Issue: ${err.errorMessage} }
    `, 'alert-danger')));
}