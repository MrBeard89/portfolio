import '../../styles/Home/Home.scss'
import { About } from '../About/About'

export const Home = () => {
  return (
    <>
      <div className='home-wrapper'>
        <div className='home-container'>
          <About />
        </div>
      </div>
    </>
  )
}
