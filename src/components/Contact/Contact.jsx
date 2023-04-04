import '../../styles/Contact/Contact.scss'
import { Link } from 'react-router-dom'

//Importing Social Icons
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi'

export const Contact = () => {
  return (
    <div className='contact-wrapper' id='contact'>
      <div className='contact-container'>
        {/* Email Container */}
        <div className='email-container'>
          <h3 className='contact-container-title'>Contact</h3>
          <h2 className='contact-intro-text'>Get in Touch</h2>
          <p className='contact-text'>
            {/* Text */}
            <span className='highlighted'>I'm looking for a Frontend job</span>, so if you
            interested about me, and you want me to{' '}
            <span className='highlighted'>join your team</span>, please send me an email !
          </p>

          {/* Send Email btn */}
          <button className='contact-email-btn'>
            <Link to='mailto:k.n.89@outlook.hu' rel='noopener noreferrer' target='_blank'>
              Send Email
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

          {/* Sign */}
          <p>
            Designed & built by <span className='full-name'>Norbert Kovács</span>
          </p>
        </div>
      </div>
    </div>
  )
}
