import '../../styles/Projects/Projects.scss'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

//Github and external site icons
import { FiGithub, FiExternalLink } from 'react-icons/fi'

//Arrow icon down
import { AiFillCaretDown } from 'react-icons/ai'

//Import Cardstext.json
import CardData from '../../utils/Cardstext.json'

export const Projects = () => {
  return (
    //main Wrapper
    <div className='projects-wrapper' id='projects'>
      <div className='projects-container'>
        <h3 className='projects-container-title'>Projects</h3>
        {/* Wrapper for Cards */}
        <div className='cards-wrapper'>
          {/* Mapping throw Cardstext.json => Writing less code ! */}

          {CardData.map((data, index) => {
            return (
              //Card Container
              <div className='project-card' key={index}>
                <h3 className='card-title'>{data.title}</h3>
                <div className='desktop-img'>
                  <Link to={data.livelink} target='_blank'>
                    <img
                      className='desktop-card-image'
                      src={require(`../../assets/card-images/desktop/${data.imglinkdesktop}`)}
                      alt='card-preview'
                    />
                  </Link>
                </div>
                <img
                  className='card-image'
                  src={require(`../../assets/card-images/mobile/${data.imglinkmobile}`)}
                  alt='card-preview'
                />

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
                More projects here
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
