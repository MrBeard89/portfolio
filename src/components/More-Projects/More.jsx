import React, { useContext } from 'react'
import '../../styles/More/More.scss'
//Import Language Library
import i18n from '../../utils/i18n'
import languageHu from '../../languages/hu.json'
import languageEn from '../../languages/en.json'

import { Link } from 'react-router-dom'
import { LanguageContext } from '../../context/LanguageContext'

export const More = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div className='more-to-see-container'>
      <button className='more-btn'>
        <Link
          to='https://github.com/MrBeard89?tab=repositories'
          target='_blank'
          aria-label='Link to my Repositories'
        >
          {i18n.text(language, i18n.MAP.projects_more_btn)}
        </Link>
      </button>
    </div>
  )
}
