import '../../styles/Navbar/Navbar.scss'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useState, useContext } from 'react'

//Context
import { Themecontext } from '../../context/Themecontext'
import { LanguageContext } from '../../context/LanguageContext'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

//Logo
import { logo as Logo } from '../Logo/logo'

//Theme toggler icons
import { BsLightbulbFill, BsLightbulbOff } from 'react-icons/bs'

const i18n = require('../../utils/i18n')
//
//
//
export const Navbar = () => {
  //Context
  const { theme, toggleTheme } = useContext(Themecontext)
  const { language, toggleLanguage } = useContext(LanguageContext)
  //Navbar open state
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)

  //Hover download btn
  const [hoverDownload, setHoverDownload] = useState(false)

  //Theme icon state

  const [themeIcon, setThemeIcon] = useState(theme)

  //Toggle theme icon
  const toggleIcon = () => {
    themeIcon === 'light' ? setThemeIcon('dark') : setThemeIcon('light')
  }

  var prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.querySelector('.navbar-wrapper').style.top = '0'
    } else {
      document.querySelector('.navbar-wrapper').style.top = '-70px'
      setHoverDownload(false)
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
          {navbarIsOpen ? '' : <GiHamburgerMenu id='burgermenu' />}
        </span>

        {/* Navbar-mobile show depend on State */}

        <div
          className={`${navbarIsOpen ? '' : 'navlinks-container'}`}
          style={{ position: 'relative' }}
        >
          <ul className='navlinks'>
            <div className='mobile-menu' onClick={() => setNavbarIsOpen((prev) => !prev)}>
              {navbarIsOpen ? (
                <AiOutlineClose id='closemenu' />
              ) : (
                <GiHamburgerMenu id='burgermenu' />
              )}
            </div>
            <HashLink smooth to='#about' onClick={() => setNavbarIsOpen(false)}>
              {i18n.text(language, i18n.MAP.navbar_about)}
            </HashLink>
            <HashLink smooth to='#skills' onClick={() => setNavbarIsOpen(false)}>
              {i18n.text(language, i18n.MAP.navbar_skills)}
            </HashLink>
            <HashLink smooth to='#projects' onClick={() => setNavbarIsOpen(false)}>
              {i18n.text(language, i18n.MAP.navbar_projects)}
            </HashLink>
            <HashLink smooth to='#contact' onClick={() => setNavbarIsOpen(false)}>
              {i18n.text(language, i18n.MAP.navbar_contact)}
            </HashLink>
            <div id='hover_download' onClick={() => setHoverDownload((prev) => !prev)}>
              <span>{i18n.text(language, i18n.MAP.navbar_resume_btn)}</span>
              {hoverDownload ? (
                <div id='hover_download_list'>
                  <Link
                    className='hover_download_links'
                    to='/Kovács_Norbert_CV_EN.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    download
                  >
                    <div className='hover_download_list_item'>
                      {i18n.text(language, i18n.MAP.navbar_resume_btn_en)}
                    </div>
                  </Link>
                  <Link
                    className='hover_download_links'
                    to='/Kovács_Norbert_CV_HU.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    download
                  >
                    <div className='hover_download_list_item'>
                      {i18n.text(language, i18n.MAP.navbar_resume_btn_hu)}
                    </div>
                  </Link>
                </div>
              ) : (
                ''
              )}
            </div>

            <button
              className='theme-toggle'
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
            <button className='flag-toggle' onClick={toggleLanguage}>
              {language === 'hu' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  shapeRendering='geometricPrecision'
                  textRendering='geometricPrecision'
                  imageRendering='optimizeQuality'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  viewBox='0 0 512 512'
                >
                  <g fillRule='nonzero'>
                    <path
                      fill='#4D4D4D'
                      d='M256-.002c70.684 0 134.689 28.664 181.013 74.987C483.336 121.31 512 185.316 512 256c0 70.684-28.664 134.69-74.987 181.014-46.324 46.324-110.329 74.988-181.013 74.988-70.676 0-134.689-28.664-181.013-74.988C28.664 390.69 0 326.677 0 256c0-70.684 28.664-134.69 74.987-181.015C121.311 28.662 185.316-.002 256-.002z'
                    />
                    <path
                      fill='#fff'
                      d='M256.001 19.595c65.277 0 124.381 26.46 167.161 69.243 42.783 42.78 69.243 101.885 69.243 167.162 0 65.278-26.463 124.383-69.243 167.163-42.78 42.78-101.884 69.243-167.161 69.243S131.619 465.945 88.84 423.163C46.057 380.383 19.597 321.278 19.597 256c0-65.277 26.46-124.382 69.24-167.165 42.782-42.78 101.887-69.24 167.164-69.24z'
                    />
                    <path
                      fill='#CD2A3E'
                      d='M455.473 171.943H56.527C89.337 94.175 166.291 39.592 256.001 39.592c89.708 0 166.661 54.583 199.472 132.351z'
                    />
                    <path
                      fill='#506F53'
                      d='M462.825 319.743c-10.504 34.117-29.214 64.639-53.829 89.254-39.154 39.155-93.25 63.375-152.995 63.375-59.745 0-113.841-24.218-152.996-63.375-24.616-24.615-43.326-55.137-53.829-89.254h413.649z'
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  shapeRendering='geometricPrecision'
                  textRendering='geometricPrecision'
                  imageRendering='optimizeQuality'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  viewBox='0 0 512 512'
                >
                  <g fillRule='nonzero'>
                    <path
                      fill='#999'
                      d='M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z'
                    />
                    <path
                      fill='#fff'
                      d='M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z'
                    />
                    <path
                      fill='#FEFEFE'
                      d='M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z'
                    />
                    <path
                      fill='#012169'
                      d='M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z'
                    />
                    <path
                      fill='#C8102E'
                      d='M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z'
                    />
                  </g>
                </svg>
              )}
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}
