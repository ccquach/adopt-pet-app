import { LOAD_PETS, ADD_PET, UPDATE_PET, DELETE_PET, GET_PAGE_PETS } from '../actions/pets';

const initialState = {
  data: [],
  totalCount: 0,
  currentPage: 1
}

const pets = (state = initialState, action) => {
  // debugger;
  let data;
  switch (action.type) {
    case LOAD_PETS:
      return {
        ...state,
        data: [ ...action.pets ]
      };
    case ADD_PET:
      const perPage = 12;
      const totalPets = state.data.length + 1;
      const lastPage = Math.ceil(totalPets / perPage);
      return {
        ...state,
        data: [ ...state.data, action.pet ],
        totalCount: totalPets,
        currentPage: lastPage
      };
    case UPDATE_PET:
      data = state.data.map(pet => (
        pet._id === action.pet._id ? action.pet : pet
      ));
      return {
        ...state,
        data
      };
    case DELETE_PET:
      data = state.data.filter(pet => pet._id !== action.id);
      return {
        ...state,
        data,
        totalCount: data.length,
        currentPage: 1
      };
    case GET_PAGE_PETS:
      const { totalCount, currentPage } = action.result;
      return { 
        ...state, 
        data: action.result.data,
        totalCount,
        currentPage
      };
    default:
      return state;
  }
}

export default pets;