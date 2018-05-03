import { SHOW_MODAL, HIDE_MODAL } from '../actions/modals';

const modals = (state = false, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      // debugger;
      return true;
    case HIDE_MODAL:
      // debugger;
      return false;
    default:
      return false;
  }
}

export default modals;