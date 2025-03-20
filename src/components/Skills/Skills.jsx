import '../../styles/Skills/Skills.scss'
import { HashLink } from 'react-router-hash-link'

//Arrow icon right
import { AiFillCaretRight } from 'react-icons/ai'

//Arrow icon down
import { AiFillCaretDown } from 'react-icons/ai'

//Desktop tech Icons
/////Left
import ReactQuery from '/tech-icons/react-query.png'
import React from '/tech-icons/react.png'
import Mui from '/tech-icons/mui.png'
import Scss from '/tech-icons/sass_icon-512.png'
import Bootstrap from '/tech-icons/bootstrap.png'
////Right
import Node from '/tech-icons/nodejs.png'
import Express from '/tech-icons/express.png'
import Mongodb from '/tech-icons/mongodb_80756.png'
import Git from '/tech-icons/git.jpg'
import Google from '/tech-icons/google.png'
import Vitest from '/tech-icons/vitest-icon.jpg'
import Redux from '/tech-icons/redux-icon.png'
import Tailwind from '/tech-icons/tailwind.png'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { ThemeContext } from '@emotion/react'
import { Jobs } from './components/Jobs'

//Import Language Library
import i18n from '../../utils/i18n'

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
            <p>
              {i18n.text(language, i18n.MAP.skills_text_6)}
              <span className='brighter'>{i18n.text(language, i18n.MAP.skills_text_7)}</span>
            </p>
            <p>
              {i18n.text(language, i18n.MAP.skills_text_8)}
              <span className='brighter'>{i18n.text(language, i18n.MAP.skills_text_9)}</span>
            </p>
          </p>
        </div>

        <Jobs />

        {/* Skill tree list Container */}

        <div className='skills-skillset-container'>
          <ul className='left-skillset'>
            {/* Left Skill tree */}

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={React} alt='tech-icon for desktop' />
              <li className='brighter'>ReactJS | Ts</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={React} alt='tech-icon for desktop' />
              <li className='brighter'>React Native</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={Redux} alt='tech-icon for desktop' />
              <li className='brighter'>Redux</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left mui' src={Mui} alt='tech-icon for desktop' />
              <li className='brighter'>Material UI</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={Scss} alt='tech-icon for desktop' />
              <li className='brighter'>Css | Scss</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={Bootstrap} alt='tech-icon for desktop' />
              <li className='brighter'>Bootstrap5</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={Tailwind} alt='tech-icon for desktop' />
              <li className='brighter'>TailwindCss</li>
            </div>
          </ul>

          {/* Right Skill tree */}

          <ul className='right-skillset'>
            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img
                className='desktop-tech-icon-right'
                src={ReactQuery}
                alt='tech-icon for desktop'
              />
              <li className='brighter'>React Query</li>
            </div>

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
              <li className='brighter'>Github,Gitlab</li>
              <img className='desktop-tech-icon-right' src={Git} alt='tech-icon for desktop' />
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li className='brighter'>GCP | Firebase</li>
              <img className='desktop-tech-icon-right' src={Google} alt='tech-icon for desktop' />
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li className='brighter'>Vitest</li>
              <img className='desktop-tech-icon-right' src={Vitest} alt='tech-icon for desktop' />
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
