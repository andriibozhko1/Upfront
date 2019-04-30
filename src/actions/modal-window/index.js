import { OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW } from '../../constantsAction'

export const openModal = () => {

  return {
    type: OPEN_MODAL_WINDOW,
    payload: true,   
  }
}

export const closeModal = () => {

  return {
    type: CLOSE_MODAL_WINDOW,
    payload: false,   
  }
}