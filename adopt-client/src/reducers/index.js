import { combineReducers } from 'redux';
import pets from './pets';
import modals from './modals';
import flashMessage from './flashMessage';

const rootReducer = combineReducers({
  pets,
  modals,
  flashMessage
});

export default rootReducer;