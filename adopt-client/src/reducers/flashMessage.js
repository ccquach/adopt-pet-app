import { SHOW_FLASH_MESSAGE, HIDE_FLASH_MESSAGE } from '../actions/flashMessage';

const intialState = {
  message: '',
  className: '',
  isDisplayed: false
};

const flashMessage = (state = intialState, action) => {
  debugger;
  switch (action.type) {
    case SHOW_FLASH_MESSAGE:
      const { message, className } = action.payload;
      return {
        ...state,
        message,
        className,
        isDisplayed: true
      }
    case HIDE_FLASH_MESSAGE:
      return {
        ...state,
        isDisplayed: false
      };
    default:
      return intialState;
  }
}

export default flashMessage;