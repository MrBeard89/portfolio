import React, { useContext } from 'react'
import '../../styles/NotFound/NotFound.scss'
import { useNavigate } from 'react-router-dom'

//Import Language Library
import i18n from '../../utils/i18n'
import { LanguageContext } from '../../context/LanguageContext'

export const NotFound = () => {
  const { language } = useContext(LanguageContext)
  let navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/portfolio/', { replace: true })
  }
  return (
    <div className='not_found_container'>
      <h1 className='not_found_title'>{i18n.text(language, i18n.MAP.routing_404)}</h1>
      <button className='not_found_btn' onClick={() => handleNavigate()}>
        <p className='not_found_btn_text'>{i18n.text(language, i18n.MAP.routing_404_btn)}</p>
      </button>
    </div>
  )
}
