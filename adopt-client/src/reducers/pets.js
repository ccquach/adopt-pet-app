import { LOAD_PETS, ADD_PET, UPDATE_PET, DELETE_PET, GET_PAGE_PETS } from '../actions/pets';

const initialState = {
  data: [],
  totalCount: 0,
  currentPage: 1,
  isLoading: false
}

const pets = (state = initialState, action) => {
  // debugger;
  let data, payload;
  switch (action.type) {
    case LOAD_PETS:
      return {
        ...state,
        data: [ ...action.pets ]
      };
    case ADD_PET:
      payload = action.data.result;
      const perPage = 12;
      const lastPage = Math.ceil(payload.totalCount / perPage);
      return {
        ...state,
        data: payload.data,
        totalCount: payload.totalCount,
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
      payload = action.data.result;
      return {
        ...state,
        data: payload.data,
        totalCount: payload.totalCount,
        currentPage: payload.currentPage
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