export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export function showModal(pet) {
  return {
    type: SHOW_MODAL,
    pet
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  };
}