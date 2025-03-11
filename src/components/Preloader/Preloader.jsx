import React from 'react'
import '../../styles/Preloader/Preloader.scss'
import Beard from '/beard.png'

function Preloader({ loading }) {
  return (
    <>
      {!loading ? (
        <div className='preloader-wrapper'>
          <img className='beard_loader' src={Beard} alt='Beard' />
        </div>
      ) : (
        ''
      )}
    </>
  )
}
export default Preloader
