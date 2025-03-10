import '../../styles/About/About.scss'
import { useContext } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

//Arrow icon down
import { AiFillCaretDown } from 'react-icons/ai'

//About me img
import Me from '/en.jpeg'
import { HashLink } from 'react-router-hash-link'
import { LanguageContext } from '../../context/LanguageContext'

//Import Language Library
import i18n from '../../utils/i18n'

export const About = () => {
  const { language } = useContext(LanguageContext)

  //Framer motion
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['-15deg', '15deg'])
  const rotateY = useTransform(mouseXSpring, [0.5, -0.5], ['10deg', '-10deg'])

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className='about-wrapper' id='about'>
      <div className='about-container'>
        <h1 className='about-introduction'>{i18n.text(language, i18n.MAP.about_title)}</h1>
        <h2 className='about-name'>{i18n.text(language, i18n.MAP.about_name)}.</h2>
        <motion.div
          className='about-img-container'
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          <div className='img-border'></div>
          <img className='img-me' src={Me} alt="It's me" />
        </motion.div>

        <h3 className='about-profession'>
          {i18n.text(language, i18n.MAP.about_profession_1)}{' '}
          <span>React Frontend {i18n.text(language, i18n.MAP.about_developer)}</span>
          {i18n.text(language, i18n.MAP.about_profession_2)}
        </h3>
        <div className='about-text'>
          <p>{i18n.text(language, i18n.MAP.about_text)}</p>
          <p>{i18n.text(language, i18n.MAP.about_text_2)}</p>
          <p className='text-last'>{i18n.text(language, i18n.MAP.about_text_3)}</p>
        </div>
        <HashLink smooth to='#skills'>
          <AiFillCaretDown className='animated-arrow-down' />
        </HashLink>
      </div>
    </div>
  )
}
