import { combineReducers } from 'redux';
import ModalWindow from './modal-window';

const allReducers  = combineReducers({
  modalWindow: ModalWindow,
})

export default allReducers;