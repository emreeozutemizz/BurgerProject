import React from 'react'
import BurgerLogo from '../assets/burgerlogo1.jpg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={BurgerLogo} alt=''/>
        </div>
        <div className='mainLink'> 
            <Link to="/">Anasayfa</Link>
            <Link to="/menu">Menü</Link>
            <Link to="/about">Hakkımızda</Link>
            <Link to="/contact">İletişim</Link>
        </div>
      
    </div>
  )
}

export default Navbar
