import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import '../styles/header.css'

function Header() {
    const [active, setActive] = useState(false);

    const showMenu = () => setActive(!active);
  return (
    <div className='header'>
        <div className='header_logo'>
            <h1>Pranjal Gain</h1>
        </div>
        <nav>
            <ul>
                <div className='closed'>
                    <CloseIcon className='close' onclick={showMenu} />
                </div>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
        <div className='changer'>
            <MenuBookIcon className='menu' onclick={showMenu} />
        </div>
    </div>
  )
}

export default Header