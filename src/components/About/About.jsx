import '../../styles/About/About.scss'

//Arrow icon
import { AiFillCaretDown } from 'react-icons/ai'

//About me img
import Me from '../../assets/en.jpg'

export const About = () => {
  return (
    <div className='about-wrapper' id='about'>
      <div className='about-container'>
        <h1 className='about-introduction'>Hi, my name is</h1>
        <h2 className='about-name'>Norbert Kovács.</h2>
        <div className='about-img-container'>
          <div className='img-border'></div>
          <img className='img-me' src={Me} alt="It's me" />
        </div>

        <h3 className='about-profession'>
          I'm a <span>Junior Frontend Developer</span>
        </h3>
        <div className='about-text'>
          <p>Welcome to my personal portfolio!</p>
          <p>
            I'm coming from the CNC industrie , where i was a programmer. 12 years past away with
            programming in Fanuc and Siemens, but I always wanted to be an IT guy, so last year i
            assigned to a bootcamp, at Webler, and i taught many things. I'm very excited about this
            new direction.
          </p>
          <p className='text-last'>If you interested about me, please continue scrolling</p>
        </div>
        <AiFillCaretDown className='animated-arrow' />
      </div>
    </div>
  )
}
