import '../../styles/Projects/Projects.scss'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { LanguageContext } from '../../context/LanguageContext'
import { useContext } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

//Github and external site icons
import { FiGithub, FiExternalLink } from 'react-icons/fi'

//Arrow icon down
import { AiFillCaretDown } from 'react-icons/ai'

//Import Language Library
import i18n from '../../utils/i18n'
import languageHu from '../../languages/hu.json'
import languageEn from '../../languages/en.json'

export const Projects = () => {
  const { language } = useContext(LanguageContext)

  //Framer motion
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['-20deg', '20deg'])
  const rotateY = useTransform(mouseXSpring, [0.5, -0.5], ['20deg', '-20deg'])

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    //main Wrapper
    <div className='projects-wrapper' id='projects'>
      <div className='projects-container'>
        <h3 className='projects-container-title'>{i18n.text(language, i18n.MAP.projects_title)}</h3>
        {/* Wrapper for Cards */}
        <div className='cards-wrapper'>
          {/* Mapping throw hu,en json files, depending on whats the language context value ! */}

          <div className='project-card-teaser' style={{ height: '150px !important' }}>
            <h3>{i18n.text(language, i18n.MAP['projects-teaser-title'])}</h3>
            <p>{i18n.text(language, i18n.MAP['projects-teaser-note'])}</p>
          </div>

          {language === 'hu'
            ? languageHu.projects.map((data, index) => {
                let desktopURL = `https://mrbeard89.github.io/portfolio/card-images/desktop/${data.imglinkdesktop}`
                let mobileURL = `https://mrbeard89.github.io/portfolio/card-images/mobile/${data.imglinkmobile}`
                return (
                  //Card Container

                  <div className='project-card' key={index}>
                    {data.id === 1 ? (
                      <span
                        className='new'
                        style={{ position: 'absolute', right: '1rem', top: '1rem' }}
                      >
                        Legújabb
                      </span>
                    ) : (
                      ''
                    )}
                    <h3 className='card-title'>{data.title}</h3>
                    <motion.div
                      className='desktop-img'
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                    >
                      <Link to={data.livelink} target='_blank'>
                        <img className='desktop-card-image' src={desktopURL} alt='card-preview' />
                      </Link>
                    </motion.div>
                    <img className='card-image' src={mobileURL} alt='card-preview' />
                    <span className='desktop-info-bar'>
                      <p className='card-description'>{data.description}</p>
                      <p className='card-note'>Note: {data.note}</p>
                    </span>
                    <p className='card-techstack'>{data.tech}</p>
                    <div className='icon-container'>
                      <Link className='github' to={data.projectlink} target='_blank'>
                        <FiGithub className='github-svg' />
                      </Link>
                      <Link className='external-link' to={data.livelink} target='_blank'>
                        <FiExternalLink className='external-link-svg' />
                      </Link>
                    </div>
                  </div>
                )
              })
            : languageEn.projects.map((data, index) => {
                let desktopURL = `https://mrbeard89.github.io/portfolio/card-images/desktop/${data.imglinkdesktop}`
                let mobileURL = `https://mrbeard89.github.io/portfolio/card-images/mobile/${data.imglinkmobile}`
                return (
                  //Card Container
                  <div className='project-card' key={index}>
                    {data.id === 1 ? (
                      <span
                        className='new'
                        style={{ position: 'absolute', right: '1rem', top: '1rem' }}
                      >
                        Newest
                      </span>
                    ) : (
                      ''
                    )}
                    <h3 className='card-title'>{data.title}</h3>
                    <motion.div
                      className='desktop-img'
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                    >
                      <Link to={data.livelink} target='_blank'>
                        <img className='desktop-card-image' src={desktopURL} alt='card-preview' />
                      </Link>
                    </motion.div>
                    <img className='card-image' src={mobileURL} alt='card-preview' />

                    <span className='desktop-info-bar'>
                      <p className='card-description'>{data.description}</p>
                      <p className='card-note'>Note: {data.note}</p>
                    </span>

                    <p className='card-techstack'>{data.tech}</p>

                    <div className='icon-container'>
                      <Link className='github' to={data.projectlink} target='_blank'>
                        <FiGithub className='github-svg' />
                      </Link>
                      <Link className='external-link' to={data.livelink} target='_blank'>
                        <FiExternalLink className='external-link-svg' />
                      </Link>
                    </div>
                  </div>
                )
              })}

          {/* more projects container/btn */}
          <div className='more-to-see-container'>
            <button className='more-btn'>
              <Link
                to='https://github.com/MrBeard89?tab=repositories'
                target='_blank'
                aria-label='Link to my Repositories'
              >
                {i18n.text(language, i18n.MAP.projects_more_btn)}
              </Link>
            </button>
          </div>

          {/* Animated Arrow down */}

          <HashLink smooth to='#contact'>
            <AiFillCaretDown className='animated-arrow-down' />
          </HashLink>
        </div>
      </div>
    </div>
  )
}
