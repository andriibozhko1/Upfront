import React from "react";
import { connect } from 'react-redux';
import { closeModal } from '../../../actions'
import './modal-window.scss';

const ModalWindow = ({ modalIsOpen, closeModalWindow }) => {

  return (
    modalIsOpen && (
      <div className="modal-window">
        <div className="modal-window__container">
          <div onClick={() => closeModalWindow()} className="modal-window__close-window">
            <img src="/images/cross.svg" alt="cross"/>
          </div>
          <div className="modal-window__title">Mehr Informationen:</div>
          <div className="modal-window__decorate-line" />
          <div className="modal-window__information">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos
            pariatur nobis at quis nisi laborum unde? Quos, est? Hic saepe
            repellendus cupiditate. Nulla et praesentium culpa est corporis
            distinctio? Ipsam in ratione quidem atque autem sunt dolorum assumenda
            officiis, praesentium rem temporibus neque fuga molestias fugiat
            libero natus iure porro suscipit fugit quo asperiores impedit
            sapiente, cum expedita. Obcaecati? Corporis ipsa dolorem perspiciatis
            dicta, praesentium ipsum accusamus odit rem, hic deleniti a
            consequatur distinctio maxime earum commodi quo enim corrupti id
            magnam minus. Quam ipsum consequuntur accusantium autem ipsam.
          </div>
        </div>
      </div>
    )
  );
};

const matchDispatchToProps = (dispatch) => {

  return {
    closeModalWindow : () => dispatch(closeModal()),
  }
}

const mapStateToProps = (state) => {
  const { modalWindow } = state;

  return {
    modalIsOpen: modalWindow.isOpen,
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(ModalWindow)