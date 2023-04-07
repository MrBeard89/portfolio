import '../../styles/Navbar/Navbar.scss'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useState, useContext, useEffect } from 'react'

//Context
import { Themecontext } from '../../context/Themecontext'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

//Logo
import { logo as Logo } from '../Logo/logo'

//Theme toggler icons
import { BsLightbulbFill, BsLightbulbOff } from 'react-icons/bs'

//
//
//
export const Navbar = () => {
  //Context
  const { theme, setTheme, localStorage, toggleTheme } = useContext(Themecontext)
  //Navbar open state
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)

  //Theme icon state

  const [themeIcon, setThemeIcon] = useState(theme)
  console.log(theme, themeIcon)

  //Toggle theme icon
  const toggleIcon = () => {
    themeIcon === 'light' ? setThemeIcon('dark') : setThemeIcon('light')
  }

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
    <div className={`navbar-wrapper ${theme === 'light' ? 'light' : 'dark'}`}>
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

        <div className={`${navbarIsOpen ? '' : 'navlinks-container'}`}>
          <ul className='navlinks' onClick={() => setNavbarIsOpen(false)}>
            <HashLink smooth to='#about'>
              About
            </HashLink>
            <HashLink smooth to='#skills'>
              Skills
            </HashLink>
            <HashLink smooth to='#projects'>
              Projects
            </HashLink>
            <HashLink smooth to='#contact'>
              Contact
            </HashLink>
            <Link to='/NorbertKovacsCv.pdf' target='_blank' rel='noopener noreferrer' download>
              <span>Resume</span>
            </Link>

            <button
              id='theme-toggle'
              onClick={() => {
                toggleIcon()
                toggleTheme()
              }}
            >
              {themeIcon === 'dark' ? (
                <BsLightbulbOff id='darktheme-icon' />
              ) : (
                <BsLightbulbFill id='lighttheme-icon' />
              )}
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}
