import React from 'react'
import './Preloader.css'
import Beard from '../../../public/beard.png'

function Preloader({ loading }) {
  return (
    <>
      {!loading ? (
        <div className='preloader-wrapper'>
          {/* <ReactLoading
            className='loading'
            type={'spokes'}
            color={'#ffff00'}
            height={100}
            width={100}
          /> */}
          <img className='beard_loader' src={Beard} alt='Beard' />
        </div>
      ) : (
        ''
      )}
    </>
  )
}
export default Preloader
