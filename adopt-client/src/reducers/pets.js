import { LOAD_PETS, ADD_PET, UPDATE_PET, DELETE_PET, GET_PAGE_PETS } from '../actions/pets';

const initialState = {
  data: [],
  totalCount: 0,
  currentPage: 1,
  isLoading: false
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
      const newTotal = state.totalCount + 1;
      const lastPage = Math.ceil(newTotal / perPage);
      return {
        ...state,
        data: [ ...state.data, action.pet ],
        totalCount: newTotal,
        currentPage: lastPage,
        isLoading: true
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
      return {
        ...state,
        totalCount: state.totalCount - 1,
        currentPage: 1
      };
    case GET_PAGE_PETS:
      return { 
        ...state, 
        data: action.result.data,
        totalCount: action.result.totalCount,
        currentPage: action.result.currentPage,
        isLoading: false
      };
    default:
      return state;
  }
}

export default pets;