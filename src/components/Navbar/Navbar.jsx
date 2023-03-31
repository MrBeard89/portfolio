import '../../styles/Navbar/Navbar.scss'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

//Logo
import { logo as Logo } from '../Logo/logo'

export const Navbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState('false')

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-container'>
        <div className='logo-container'>
          <Link to='/home'>
            <Logo className='logo' />
          </Link>
        </div>
        <div class='triangle-down'></div>

        {/* Hamburger Icons */}

        <span className='mobile-menu' onClick={() => setNavbarIsOpen((prev) => !prev)}>
          {navbarIsOpen ? <AiOutlineClose id='closemenu' /> : <GiHamburgerMenu id='burgermenu' />}
        </span>

        {/* Navbar-mobile show depend on State */}

        <div className={`navlinks-container${navbarIsOpen ? 'show-mobile-menu' : ''}`}>
          <ul className='navlinks'>
            <HashLink smooth to='#'>
              About
            </HashLink>
            <HashLink smooth to='#'>
              Skills
            </HashLink>
            <HashLink smooth to='#'>
              Projects
            </HashLink>
            <HashLink smooth to='#'>
              Contact
            </HashLink>
          </ul>
        </div>
      </div>
    </div>
  )
}
