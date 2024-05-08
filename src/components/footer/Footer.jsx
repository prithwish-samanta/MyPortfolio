import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Prithwish Samanta</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#certifications'>Certifications</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/profile.php?id=61553398238609'><FaFacebook/></a>
        <a href='https://www.instagram.com/prith.wish4/'><FiInstagram/></a>
        <a href='https://twitter.com/Prithwish637818'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer