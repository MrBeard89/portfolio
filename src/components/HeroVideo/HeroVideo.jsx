import '../../styles/HeroVideo/HeroVideo.scss'

import { CgScrollV } from 'react-icons/cg'

import HeroVideo from '/hero-video.mp4'
import HeroPoster from '/hero-poster.png'
import BeardIcon from '/beard.png'
import { useLocation } from 'react-router-dom'

export const HeroVideoComponent = () => {
  const location = useLocation()
  const pathName = location.pathname

  return (
    <>
      {pathName === '/portfolio/' ? (
        <div className='video_wrapper'>
          <div className='video_icon_container'>
            <img className='video_wrapper_icon' src={BeardIcon} />
          </div>

          <video
            className='video'
            src={HeroVideo}
            // controls={true}
            autoPlay={true}
            poster={HeroPoster}
            loop={true}
            // playsInline
            // muted
            preload='auto'
          />
          <div className='scroll_icon_container'>
            <CgScrollV className='video_scroll_icon' />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

// export const HeroVideoComponent = () => {
//   const videoRef = useRef(null)
//   const scrollContainerRef = useRef(null)
//   const [isVideoEnded, setIsVideoEnded] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       const video = videoRef.current
//       const scrollPosition = window.scrollY
//       const windowHeight = window.innerHeight
//       const docHeight = document.body.offsetHeight

//       if (!video || !video.duration) return

//       // Calculate the progress and set currentTime accordingly
//       const maxScroll = docHeight - windowHeight
//       const progress = Math.min(scrollPosition / maxScroll, 1)
//       video.currentTime = progress * video.duration

//       // Unlock scroll after video ends
//       if (progress >= 1 && !isVideoEnded) {
//         setIsVideoEnded(true)
//         document.body.style.overflow = 'auto'
//       }
//     }

//     // Initially lock the scroll
//     document.body.style.overflow = 'hidden'

//     window.addEventListener('scroll', handleScroll)
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//       document.body.style.overflow = 'auto' // Ensure scroll is reset
//     }
//   }, [isVideoEnded])

//   return (
//     <>
//       {/* Scrollable container for video */}
//       <div
//         ref={scrollContainerRef}
//         // className='video_wrapper'
//         style={{ scrollSnapType: 'y mandatory', height: '100vh', overflowY: 'scroll' }}
//       >
//         {/* Scrollable content to simulate video scroll */}
//         <div style={{ heigh: '200vh', position: 'relative',  }}>
//           <video
//             ref={videoRef}
//             src={HeroVideo}
//             // className='video'
//             style={{
//               position: 'sticky',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',

//               zIndex: 6,
//             }}
//           />
//         </div>
//       </div>
//     </>
//   )
// }
