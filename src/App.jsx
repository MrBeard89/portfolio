import './App.scss'

//React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Components
import { Home } from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { NotFound } from './components/NotFound/NotFound'

//Loading animation
import Preloader from './components/Preloader/Preloader'
import { Suspense, useEffect, useState } from 'react'
import { Themecontext } from './context/Themecontext'
import { LanguageContext } from './context/LanguageContext'
import { HeroVideoComponent } from './components/HeroVideo/HeroVideo'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'hu')
  const [loading, setLoading] = useState(false) //Preloader state

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const toggleLanguage = () => {
    language === 'hu' ? setLanguage('en') : setLanguage('hu')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  //For Preloader
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 1500)
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      <Themecontext.Provider value={{ theme, setTheme, localStorage, toggleTheme }}>
        {!loading ? (
          <Preloader loading={loading} />
        ) : (
          <Suspense fallback={<Preloader loading={loading} />}>
            <div className={`App ${theme}`}>
              <Router>
                <Navbar />
                <HeroVideoComponent />

                <Routes>
                  <Route path='/portfolio' element={<Home />} />
                  <Route path='/portfolio/*' element={<NotFound />} />
                  <Route path='/*' element={<NotFound />} />
                </Routes>
              </Router>
            </div>
          </Suspense>
        )}
      </Themecontext.Provider>
    </LanguageContext.Provider>
  )
}

export default App
