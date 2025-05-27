import '../../styles/Blackhole/Blackhole.scss'

import BlackholeVid from '../../../public/blackhole.webm'

export const Blackhole = () => {
  return (
    <div className='blackhole-center-container'>
      <div className='blackhole-container'>
        <video
          src={BlackholeVid}
          autoPlay
          loop
          muted
          //playsInline
          className='blackhole-video'
        ></video>
      </div>
    </div>
  )
}
