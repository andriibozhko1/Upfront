import React from 'react'
import Info from '../../components/UI/info'
import ModalWindow from '../../components/UI/modal-window';

import './page.scss'

const Main = () => {
  return (
    <div className="Main">
      <div className="Main__logo">
        <img src="images/logo_JL.svg" alt="logo"/>
      </div>
      <Info />
      <ModalWindow />
      <div className="footer">
        
      </div>
    </div>
  )
}

export default Main;