import '../../styles/Home/Home.scss'
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'
import { Projects } from '../Projects/Projects'
import { Skills } from '../Skills/Skills'
import { BlackholeTop } from '../Blackhole/BlackholeTop'
import { BlackholeBottom } from '../Blackhole/BlackholeBottom'

export const Home = () => {
  return (
    <>
      <div className='home-wrapper'>
        <BlackholeTop />
        <div className='home-container'>
          <div id='stars_fix'></div>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <BlackholeBottom />
          {/* <div className='bottom-box-shadow'></div> */}
        </div>
      </div>
    </>
  )
}
