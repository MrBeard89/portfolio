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

  //When scrolling hide Navbar

  var prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.querySelector('.navbar-wrapper').style.top = '0'
    } else {
      document.querySelector('.navbar-wrapper').style.top = '-70px'
    }
    prevScrollpos = currentScrollPos
  }

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-container'>
        <div className='logo-container'>
          <HashLink smooth to='#about'>
            <Logo className='logo' />
          </HashLink>
        </div>

        {/* Hamburger Icons */}

        <span className='mobile-menu' onClick={() => setNavbarIsOpen((prev) => !prev)}>
          {navbarIsOpen ? <AiOutlineClose id='closemenu' /> : <GiHamburgerMenu id='burgermenu' />}
        </span>

        {/* Navbar-mobile show depend on State */}

        <div className={`navlinks-container${navbarIsOpen ? 'show-mobile-menu' : ''}`}>
          <ul className='navlinks' onClick={() => setNavbarIsOpen((prev) => !prev)}>
            <HashLink smooth to='#about'>
              About
            </HashLink>
            <HashLink smooth to='#skills'>
              Skills
            </HashLink>
            <HashLink smooth to='#projects'>
              Projects
            </HashLink>
            <HashLink smooth to='#'>
              Contact
            </HashLink>
            <Link
              to='../../../public/Junior Frontend Developer CV Norbert Kovacs.pdf'
              target='_blank'
              download
            >
              <span>Resume</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
