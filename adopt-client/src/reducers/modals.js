import { SHOW_MODAL, HIDE_MODAL } from '../actions/modals';

const modals = (state = false, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return true;
    case HIDE_MODAL:
      return false;
    default:
      return false;
  }
}

export default modals;