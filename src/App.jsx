import './App.scss'

//React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'

//Loading animation
import Preloader from './components/Preloader/Preloader'
import { useEffect, useState } from 'react'
import { Themecontext } from './context/Themecontext'
import { LanguageContext, LanguageContextDefaults } from './context/LanguageContext'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [language, setLanguage] = useState(LanguageContextDefaults.value)

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const toggleLanguage = () => {
    language === 'hu' ? setLanguage('en') : setLanguage('hu')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      <div className={`App ${theme}`}>
        <Themecontext.Provider value={{ theme, setTheme, localStorage, toggleTheme }}>
          <Router>
            <Preloader>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
              </Routes>
            </Preloader>
          </Router>
        </Themecontext.Provider>
      </div>
    </LanguageContext.Provider>
  )
}

export default App
