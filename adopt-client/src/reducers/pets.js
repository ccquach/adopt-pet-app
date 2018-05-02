import { LOAD_PETS, ADD_PET, DELETE_PET } from '../actions/index';

const pets = (state = [], action) => {
  // debugger;
  switch (action.type) {
    case LOAD_PETS:
      return [ ...action.data ];
    case ADD_PET:
      return [ ...state, action.pet ];
    case DELETE_PET:
      let pets = state.filter(pet => pet._id !== action.id);
      return [ ...pets ];
    default:
      return state;
  }
}

export default pets;