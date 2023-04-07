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
import Angular from '../../assets/tech-icons/angularjs-icon-14.jpg'
import Scss from '../../assets/tech-icons/sass_icon-512.png'
import Bootstrap from '../../assets/tech-icons/bootstrap.png'
////Right
import Node from '../../assets/tech-icons/nodejs.png'
import Express from '../../assets/tech-icons/express.png'
import Mongodb from '../../assets/tech-icons/mongodb_80756.png'
import Git from '../../assets/tech-icons/git.jpg'
import Firebase from '../../assets/tech-icons/firebase.png'

export const Skills = () => {
  return (
    //Main Wrapper

    <div className='skills-wrapper' id='skills'>
      <div className='skills-container'>
        <h3 className='skills-title'>Skills</h3>

        {/* Text Container  */}

        <div className='skills-text-container'>
          <p>
            Web development for me, is passion.I like creating sites, user environments, and overall
            designing the page, however i'm not a webdesigner.
          </p>
          <p>
            My future plans are, learning <span className='python-text'>Python</span> , and assign
            somewhere to be a <span className='designer-text'>Webdesigner</span> also.
          </p>
          <p>
            Little <span className='brighter'>Photoshoping</span> ,
            <span className='brighter'>MS Office</span> knowledge , Fast typing.I'm improving
            myself, and doing projects every day!
          </p>
        </div>

        {/* Skill tree list Container */}

        <div className='skills-skillset-container'>
          <ul className='left-skillset'>
            {/* Left Skill tree */}

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={Js} alt='tech-icon for desktop' />
              <li className='brighter'>Javascript</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={React} alt='tech-icon for desktop' />
              <li className='brighter'>React</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={Angular} alt='tech-icon for desktop' />
              <li>Angular</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <img className='desktop-tech-icon-left' src={Scss} alt='tech-icon for desktop' />
              <li className='brighter'>Css3, Scss</li>
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
