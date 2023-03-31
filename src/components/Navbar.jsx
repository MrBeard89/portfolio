import '../styles/Navbar/Navbar.scss'

//Logo
import { logo as Logo } from '../../src/components/Logo/logo'

export const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar-container'>
        <Logo />
      </div>
    </div>
  )
}
