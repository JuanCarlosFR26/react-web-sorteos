import React from 'react'
import { BsTwitter, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
        <h2>Fortuna Fest</h2>
        <div className='socials'>
            <a href=''><BsTwitter /></a>
            <a href=''><BsInstagram /></a>
            <a href=''><BsWhatsapp /></a>
        </div>
        <p>&copy; All rights reserved by JuanquiDev 2023</p>
    </footer>
  )
}

export default Footer