export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

// const API_URL = 'http://localhost:3001/api/pets/';

export function showModal(pet) {
  // debugger;
  return {
    type: SHOW_MODAL,
    pet
  };
}

export function hideModal() {
  // debugger;
  return {
    type: HIDE_MODAL
  };
}