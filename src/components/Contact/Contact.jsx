import '../../styles/Contact/Contact.scss'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../../context/LanguageContext'

//Importing Social Icons
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi'
import { useContext } from 'react'
//Import Language Library
const i18n = require('../../utils/i18n.js')

export const Contact = () => {
  const { language } = useContext(LanguageContext)
  //
  return (
    <div className='contact-wrapper' id='contact'>
      <div className='contact-container'>
        {/* Email Container */}
        <div className='email-container'>
          <h3 className='contact-container-title'>{i18n.text(language, i18n.MAP.contact_title)}</h3>
          <h2 className='contact-intro-text'>{i18n.text(language, i18n.MAP.contact_intro_text)}</h2>
          <p className='contact-text' style={{ display: 'none' }}>
            {/* Text */}
            <span className='highlighted'>
              {i18n.text(language, i18n.MAP.contact_highlighted_text_1)}
            </span>
            {i18n.text(language, i18n.MAP.contact_text_1)}{' '}
            <span className='highlighted'>
              {i18n.text(language, i18n.MAP.contact_highlighted_text_2)}
            </span>
            {i18n.text(language, i18n.MAP.contact_text_2)}
          </p>
          <p className='contact-text'>{i18n.text(language, i18n.MAP.contact_at_work)}</p>

          {/* Send Email btn */}
          <button className='contact-email-btn'>
            <Link to='mailto:k.n.89@outlook.hu' rel='noopener noreferrer' target='_blank'>
              {i18n.text(language, i18n.MAP.contact_email_btn)}
            </Link>
          </button>
        </div>

        {/* Social Media Container */}
        <div className='social-media'>
          {/* Social icon Container */}
          <div className='social-icons-container'>
            {/* Icons */}
            <Link to='https://github.com/MrBeard89' target='_blank'>
              <FiGithub className='social-icons' />
            </Link>
            <Link to='https://www.linkedin.com/in/norbert-kov%C3%A1cs-6703ba26b/' target='_blank'>
              <FiLinkedin className='social-icons' />
            </Link>
            <Link to='https://www.facebook.com/norbert.kovacs.12177/' target='_blank'>
              <FiFacebook className='social-icons' />
            </Link>
            <Link to='https://twitter.com/Mr_Beard8' target='_blank'>
              <FiTwitter className='social-icons' />
            </Link>
          </div>

          <div className='only-desktop-email-line'>
            <p className='email-line'>
              <Link to='mailto:k.n.89@outlook.hu' rel='noopener noreferrer' target='_blank'>
                k.n.89@outlook.hu
              </Link>
            </p>
          </div>

          {/* Sign */}
          <p>
            {i18n.text(language, i18n.MAP.contact_footer_text)}
            <span className='full-name'>{i18n.text(language, i18n.MAP.contact_sign)}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
