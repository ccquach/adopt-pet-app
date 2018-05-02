import { LOAD_PETS, ADD_PET } from '../actions/index';

const pets = (state = [], action) => {
  // debugger;
  switch (action.type) {
    case LOAD_PETS:
      return [ ...action.data ];
    case ADD_PET:
      return [ ...state, action.pet ];
    default:
      return state;
  }
}

export default pets;