import '../../styles/logo/logo.scss'
import Beard from '/beard.png'

export const logo = () => {
  return (
    <>
      <div className='logo-wrapper'>
        <div className='logo-border'></div>
        <span className='logo'>
          <img src={Beard} alt='logo' style={{ width: '33px', borderRadius: '50%' }} />
        </span>
      </div>
    </>
  )
}
