import React from 'react'
import {FaGlobe} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
         <Link to='/'>
            <div className='navbar'>
                <FaGlobe className='icon' />
                <h1 style={{ fontSize: 20,}}> Crypto <span className='purple'>sphere</span></h1>
            </div>
            </Link>
    )
}

export default Navbar
