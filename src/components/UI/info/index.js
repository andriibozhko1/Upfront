import React, { Component } from 'react'
import { connect } from 'react-redux';
import { openModal } from '../../../actions'
import './info.scss';

const Info = ({ openModalWindow, modalIsOpen }) => {    

  return (
    <div className="Info">
      <div className="Info__title">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <div className="Info__title-mood-pic"><img src="images/mood-mobile.jpg" alt="mood-mobile.jpg"/></div>
      </div>
      <div className="Info__content">
        <ul className="Info__list">
          <li className="Info__list-item">
            <img src="images/arrow.svg" alt="arrow"/>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </li>
          <li className="Info__list-item">
            <img src="images/arrow.svg" alt="arrow"/>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </li>
        </ul>
        <div className="Info__price">
          <div className="Info__price-wrapper">
            <div className="Info__price-arrow">
              <img src="/images/arrowCircle.svg" alt="arrow-circle"/>
            </div>
            <div className="Info__price-values">
              <div className="Info__price-main-value">EUR 79,40</div>
              <div className="Info__price-old-value">EUR 13,23 pro Monat</div>
            </div>
          </div>
        </div>
      </div>
      {!modalIsOpen && (
        <div onClick={() => openModalWindow()} className="Info__open-modal-btn">
          Jetzt säubern und neuen job finden
        </div>
      )}
    </div>
  )
}

const matchDispatchToProps = (dispatch) => {

  return {
    openModalWindow: () => dispatch(openModal()),
  }
}

const mapStateToProps = (state) => {
  const { modalWindow } = state;
  return {
    modalIsOpen: modalWindow.isOpen,
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Info)