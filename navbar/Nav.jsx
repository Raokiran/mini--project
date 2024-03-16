import React from 'react'
import './Nav.css'
import Logo from '../../assets/Mighty Mite_files/logo.png'


function Nav() {
  return (
    <nav className='navbar'>
        <div className="image">
            <img src={Logo} alt="logo" className='nav-img' />
        </div>
        <h1>MIGHTY MITE'S</h1>
        <div className="links">
            <ul className='nav-links'>
              
            </ul> 
        </div>
    </nav>  )
}

export default Nav