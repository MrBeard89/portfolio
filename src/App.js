import './App.scss'
import { Navbar } from './components/Navbar'

//React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  )
}

export default App
