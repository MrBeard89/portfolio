import '../../styles/Contact/Contact.scss'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../../context/LanguageContext'

//Importing Social Icons
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { IoShareSocialSharp } from 'react-icons/io5'
import { MdMarkEmailUnread } from 'react-icons/md'

import { useContext, useState } from 'react'
//Import Language Library
import i18n from '../../utils/i18n'

export const Contact = () => {
  const [socialTrigger, setSocialTrigger] = useState(false)
  const [emailTrigger, setEmailTrigger] = useState(false)
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
          <div className={`social-icons-container ${socialTrigger ? 'social_apearance' : ''}`}>
            {/* Icons */}
            <Link className='social-icons-trigger' onClick={() => setSocialTrigger(!socialTrigger)}>
              <IoShareSocialSharp className='social-icons-trigger-icon' />
            </Link>

            <Link to='https://github.com/MrBeard89' target='_blank'>
              <FiGithub
                className={`social-icons ${socialTrigger ? 'social_icon_apearance' : ''}`}
              />
            </Link>
            <Link to='https://www.linkedin.com/in/norbert-kov%C3%A1cs-6703ba26b/' target='_blank'>
              <FiLinkedin
                className={`social-icons ${socialTrigger ? 'social_icon_apearance' : ''}`}
              />
            </Link>
            <Link to='https://www.facebook.com/norbert.kovacs.12177/' target='_blank'>
              <FiFacebook
                className={`social-icons ${socialTrigger ? 'social_icon_apearance' : ''}`}
              />
            </Link>
            <Link to='https://x.com/KovcsNorbe26504' target='_blank'>
              <FaXTwitter
                className={`social-icons ${socialTrigger ? 'social_icon_apearance' : ''}`}
              />
            </Link>
          </div>

          <div className={`only-desktop-email-line ${emailTrigger ? 'email_line_apearance' : ''}`}>
            <Link className='email-trigger' onClick={() => setEmailTrigger(!emailTrigger)}>
              <MdMarkEmailUnread className='email-trigger-icon' />
            </Link>
            <p className={`email-line ${emailTrigger ? 'email_text_apearance' : ''}`}>
              <Link to='mailto:k.n.89@outlook.hu' rel='noopener noreferrer' target='_blank'>
                k.n.89@outlook.hu
              </Link>
            </p>
            {/* <hr className='email-line-hr' /> */}
          </div>

          {/* Sign */}
          {/* <p className='sign'>
            {i18n.text(language, i18n.MAP.contact_footer_text)}
            <span className='full-name'>{i18n.text(language, i18n.MAP.contact_sign)}</span>
          </p> */}
        </div>
      </div>
    </div>
  )
}
