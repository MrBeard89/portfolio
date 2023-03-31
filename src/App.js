import './App.scss'

//React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'

//Loading animation
import Preloader from './components/Preloader/Preloader'

function App() {
  return (
    <div className='App'>
      <Router>
        <Preloader>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Preloader>
      </Router>
    </div>
  )
}

export default App
