import { GET_PETS } from '../actions/index';

const pets = (state = [], action) => {
  // debugger;
  switch (action.type) {
    case GET_PETS:
      // debugger;
      return [ ...action.data ];
    default:
      return state;
  }
}

export default pets;