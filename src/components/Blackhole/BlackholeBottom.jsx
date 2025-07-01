import '../../styles/Blackhole/Blackhole.scss'

import BlackholeVid from '/blackhole.webm'

export const BlackholeBottom = () => {
  return (
    <div className='blackhole-bottom-wrapper'>
      <div className='blackhole-bottom-container'>
        <video
          src={BlackholeVid}
          autoPlay
          loop
          muted
          //playsInline
          className='blackhole-bottom-video'
        ></video>
      </div>
    </div>
  )
}
