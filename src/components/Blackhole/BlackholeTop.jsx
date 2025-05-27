import '../../styles/Blackhole/Blackhole.scss'

import BlackholeVid from '../../../public/blackhole.webm'

export const BlackholeTop = () => {
  return (
    <div className='blackhole-top-wrapper'>
      <div className='blackhole-top-container'>
        <video
          src={BlackholeVid}
          autoPlay
          loop
          muted
          //playsInline
          className='blackhole-top-video'
        ></video>
      </div>
    </div>
  )
}
