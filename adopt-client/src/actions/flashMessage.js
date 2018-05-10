export const SHOW_FLASH_MESSAGE = "SHOW_FLASH_MESSAGE";
export const HIDE_FLASH_MESSAGE = "HIDE_FLASH_MESSAGE";

const showFlashMessage = (message, className) => ({
  type: SHOW_FLASH_MESSAGE,
  payload: {
    message,
    className
  }
})

const hideFlashMessage = () => ({
  type: HIDE_FLASH_MESSAGE
})

export const sendFlashMessage = (message, className) => dispatch => {
  dispatch(showFlashMessage(message, className))
  setTimeout(() => {
    dispatch(hideFlashMessage());
  }, 8000);
}