import '../../styles/Skills/Skills.scss'
import { HashLink } from 'react-router-hash-link'

//Arrow icon right
import { AiFillCaretRight } from 'react-icons/ai'

//Arrow icon down
import { AiFillCaretDown } from 'react-icons/ai'

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
          <p>Little Photoshoping , MS Office knowledge , Fast typing</p>
        </div>

        {/* Skill tree list Container */}

        <div className='skills-skillset-container'>
          <ul className='left-skillset'>
            {/* Left Skill tree */}

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li className='brighter'>Javascript</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li className='brighter'>React</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li>Angular</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li className='brighter'>Css3, Scss</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li className='brighter'>Bootstrap5</li>
            </div>
          </ul>

          {/* Right Skill tree */}

          <ul className='right-skillset'>
            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li>Node.Js</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li>Express.Js</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li>MongoDB</li>
            </div>

            <div className='skill-element-container'>
              <AiFillCaretRight className='right-arrow' />
              <li className='brighter'>Git, Github</li>
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
