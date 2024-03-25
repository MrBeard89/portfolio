import '../../styles/Skills/Skills.scss'
import { HashLink } from 'react-router-hash-link'

//Arrow icon right
import { AiFillCaretRight } from 'react-icons/ai'

//Arrow icon down
import { AiFillCaretDown } from 'react-icons/ai'

//Desktop tech Icons
/////Left
import Js from '../../assets/tech-icons/js-icon-24.jpg'
import React from '../../assets/tech-icons/react.png'
import Mui from '../../assets/tech-icons/mui.png'
import Scss from '../../assets/tech-icons/sass_icon-512.png'
import Bootstrap from '../../assets/tech-icons/bootstrap.png'
////Right
import Node from '../../assets/tech-icons/nodejs.png'
import Express from '../../assets/tech-icons/express.png'
import Mongodb from '../../assets/tech-icons/mongodb_80756.png'
import Git from '../../assets/tech-icons/git.jpg'
import Firebase from '../../assets/tech-icons/firebase.png'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

//Import Language Library
const i18n = require('../../utils/i18n')

export const Skills = () => {
  const { language } = useContext(LanguageContext)
  return (
    //Main Wrapper

    <div className='skills-wrapper' id='skills'>
      <div className='skills-container'>
        <h3 className='skills-title'>{i18n.text(language, i18n.MAP.skills_title)}</h3>

        {/* Text Container  */}

        <div className='skills-text-container'>
          <p>{i18n.text(language, i18n.MAP.skills_text_1)}</p>
          <p>
            {i18n.text(language, i18n.MAP.skills_text_2)}
            <span className='python-text'>{i18n.text(language, i18n.MAP.skills_node)}</span>
            {i18n.text(language, i18n.MAP.skills_text_3)}
            <span className='designer-text'>
              {i18n.text(language, i18n.MAP.skills_webdeveloper)}
            </span>
            {i18n.text(language, i18n.MAP.skills_text_4)}
          </p>
          <p>
            {i18n.text(language, i18n.MAP.skills_little)}
            <span className='brighter'>{i18n.text(language, i18n.MAP.skills_photoshop)}</span> ,
            <span className='brighter'>{i18n.text(language, i18n.MAP.skills_msoffice)}</span>
            {i18n.text(language, i18n.MAP.skills_text_5)}{' '}
            <p>{i18n.text(language, i18n.MAP.skills_text_6)}</p>
          </p>
        </div>

        {/* Skill tree list Container */}

        <div className='skills-skillset-container'>
          <ul className='left-skillset'>
            {/* Left Skill tree */}

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={Js} alt='tech-icon for desktop' />
              <li className='brighter'>JS - Typescript</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={React} alt='tech-icon for desktop' />
              <li className='brighter'>React</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left mui' src={Mui} alt='tech-icon for desktop' />
              <li className='brighter'>Material UI</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={Scss} alt='tech-icon for desktop' />
              <li className='brighter'>Css3,Scss</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={Bootstrap} alt='tech-icon for desktop' />
              <li className='brighter'>Bootstrap5</li>
            </div>
          </ul>

          {/* Right Skill tree */}

          <ul className='right-skillset'>
            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li>Node.Js</li>
              <img className='desktop-tech-icon-right' src={Node} alt='tech-icon for desktop' />
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li>Express.Js</li>
              <img className='desktop-tech-icon-right' src={Express} alt='tech-icon for desktop' />
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li>MongoDB</li>
              <img className='desktop-tech-icon-right' src={Mongodb} alt='tech-icon for desktop' />
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li className='brighter'>Git, Github</li>
              <img className='desktop-tech-icon-right' src={Git} alt='tech-icon for desktop' />
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li className='brighter'>Firebase</li>
              <img className='desktop-tech-icon-right' src={Firebase} alt='tech-icon for desktop' />
            </div>
          </ul>
        </div>

        {/* Animated Arrow down */}

        <HashLink smooth to='#projects'>
          <AiFillCaretDown className='animated-arrow-down' />
        </HashLink>
      </div>
    </div>
  )
}
