import '../../styles/About/About.scss'
import { useContext } from 'react'

//Arrow icon down
import { AiFillCaretDown } from 'react-icons/ai'

//About me img
import Me from '../../assets/en.jpeg'
import { HashLink } from 'react-router-hash-link'
import { LanguageContext } from '../../context/LanguageContext'

//Import Language Library
import i18n from '../../utils/i18n'

export const About = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div className='about-wrapper' id='about'>
      <div className='about-container'>
        <h1 className='about-introduction'>{i18n.text(language, i18n.MAP.about_title)}</h1>
        <h2 className='about-name'>{i18n.text(language, i18n.MAP.about_name)}.</h2>
        <div className='about-img-container'>
          <div className='img-border'></div>
          <img className='img-me' src={Me} alt="It's me" />
        </div>

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
