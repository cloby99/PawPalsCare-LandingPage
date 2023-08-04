import React from 'react'
import './footer.css';

import LOGO from '../../assets/logoFooter.svg'
import QR from '../../assets/qrFooter.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <img src={LOGO} alt="" />
      </div>
      <div className='footerRight'>
        <p>Join us in this noble cause and <br /> become a part of our family.</p>
        <img src={QR} alt="" className='footer__qr'/>

      </div>
    </footer>
  )
}

export default Footer