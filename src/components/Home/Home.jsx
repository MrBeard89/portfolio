import '../../styles/Home/Home.scss'
import { About } from '../About/About'
import { Skills } from '../Skills/Skills'

export const Home = () => {
  return (
    <>
      <div className='home-wrapper'>
        <div className='home-container'>
          <About />
          <Skills />
        </div>
      </div>
    </>
  )
}
