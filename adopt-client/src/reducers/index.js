import { combineReducers } from 'redux';
import pets from './pets';
import modals from './modals';

const rootReducer = combineReducers({
  pets,
  modals
});

export default rootReducer;