import { LOAD_PETS, ADD_PET, UPDATE_PET, DELETE_PET } from '../actions/index';

const pets = (state = [], action) => {
  // debugger;
  let pets;
  switch (action.type) {
    case LOAD_PETS:
      return [ ...action.data ];
    case ADD_PET:
      return [ ...state, action.pet ];
    case UPDATE_PET:
      pets = state.map(pet => (
        pet._id === action.pet._id ? action.pet : pet
      ));
      return [ ...pets ];
    case DELETE_PET:
      pets = state.filter(pet => pet._id !== action.id);
      return [ ...pets ];
    default:
      return state;
  }
}

export default pets;