import { OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW } from '../../constantsAction';

const modalWindowState = {
  isOpen: false,
}

const reducer = (state = modalWindowState, { type, payload }) => {

  switch ( type ) {
    case OPEN_MODAL_WINDOW: 
      state.isOpen = payload;
      return {...state}

    case CLOSE_MODAL_WINDOW: 
      state.isOpen = payload;
      return {...state}


    default:
      return state
  }
}

export default reducer