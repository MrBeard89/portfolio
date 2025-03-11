import './App.scss'

//React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'

//Loading animation
import Preloader from './components/Preloader/Preloader'
import { Suspense, useEffect, useState } from 'react'
import { Themecontext } from './context/Themecontext'
import { LanguageContext, LanguageContextDefaults } from './context/LanguageContext'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [language, setLanguage] = useState(LanguageContextDefaults.value)
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
                <Routes>
                  <Route path='/portfolio' element={<Home />} />
                  <Route path='/portfolio/home' element={<Home />} />
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
