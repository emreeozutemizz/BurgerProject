import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <FacebookIcon/>
        <XIcon/>
        <InstagramIcon/>
      </div>
      <p>Tüm Hakları Saklıdır | OzBurger</p>
    </div>
  )
}

export default Footer
