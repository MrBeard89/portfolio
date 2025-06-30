import {
  Box,
  Divider,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  Typography,
} from '@mui/material'
import { useContext, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext'
import { Link } from 'react-router-dom'

//Import Language Library
import i18n from '../../../utils/i18n'

export const Jobs = () => {
  const { language } = useContext(LanguageContext)

  const [fullWidth] = useState(true)

  return (
    <div className='jobs-container'>
      <List
        sx={{
          width: fullWidth,
          color: '#6084c3',
          fontSize: '22px',
          backgroundImage: 'linear-gradient(#112240, #050116)',
          fontFamily: "'Genos', Calibri, Ruda, sans-serif",
          fontWeight: '500',
          borderRadius: '1rem',
          opacity: '0.9',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 600,
        }}
        subheader={<li />}
      >
        {/* Sticky header */}
        <ListSubheader
          sx={{
            backgroundImage: 'linear-gradient(#050116,#112240)',
            color: '#7391c7',
            fontWeight: '700',
            letterSpacing: '2px',
            fontFamily: ' "Genos", Calibri, Ruda, sans-serif',
            fontSize: '28px',
          }}
        >
          {i18n.text(language, i18n.MAP.jobs_title)}
        </ListSubheader>
        <ListItem alignItems='flex-start'>
          <ListItemText
            secondary={
              <>
                {/* Money and More Zrt. */}
                <Box
                  className='momo_container'
                  sx={{
                    mb: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: "'Genos', Calibri, Ruda, sans-serif",
                  }}
                >
                  <Typography variant='h4' sx={{ color: '#fdfd96', marginBottom: '0.5rem' }}>
                    Money and More Zrt.
                  </Typography>
                  <span
                    style={{
                      color: '#45669e',
                      marginBottom: '0.5rem',
                      fontSize: '22px',
                      fontWeight: '500',
                    }}
                  >
                    Aug 2023 - Jan 2025
                  </span>
                  <Typography variant='body1' sx={{ mb: '0.5rem' }}>
                    {/* {i18n.text(language, i18n.MAP.jobs_typog_momo_1)} */}
                    <span style={{ color: '#fffafa' }}>
                      React | React Native | Expo | CodeGPT | JWT | ReactDataGrid | Context | MUI |
                      Jira | BitBucket | SourceTree | Slack
                    </span>
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      color: '#45669e',
                      lineHeight: '1.2',
                      fontFamily: "'Genos', Calibri, Ruda, sans-serif",
                      fontSize: '22px',
                      fontWeight: '500',
                    }}
                  >
                    {i18n.text(language, i18n.MAP.jobs_typog_momo_2)}
                  </Typography>

                  <Box
                    className='cover_letter_box'
                    sx={[
                      {
                        mt: '1rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '1rem',
                        height: '2rem',
                        width: '100%',
                        backgroundColor: '#324972',
                        cursor: 'pointer',
                      },

                      {
                        '&:hover': {
                          backgroundColor: '#45669e',
                        },
                      },
                    ]}
                  >
                    <Link
                      to='/portfolio/Ajánlólevél_Kovács Norbert.pdf'
                      target='_blank'
                      rel='noopener noreferrer'
                      download
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <span style={{ fontWeight: '500', fontSize: '22px' }}>
                        {i18n.text(language, i18n.MAP.jobs_cover_btn)}
                      </span>
                    </Link>
                  </Box>
                </Box>
              </>
            }
          />
        </ListItem>
        <Divider
          variant='inset'
          component='li'
          sx={{
            bgcolor: '#45669e',
            ml: 'unset',
            width: '100%',
            //mb: '1rem',
          }}
        />

        {/* Freelane */}

        <ListItem alignItems='flex-start'>
          <ListItemText
            secondary={
              <>
                <Box sx={{ mb: '2rem', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h4' sx={{ color: '#fdfd96', marginBottom: '0.5rem' }}>
                    Freelance
                  </Typography>
                  <span
                    style={{
                      color: '#45669e',
                      marginBottom: '0.5rem',
                      fontSize: '22px',
                      fontFamily: "'Genos', Calibri, Ruda, sans-serif",
                      fontWeight: '500',
                    }}
                  >
                    Mar 2023 - Aug 2023
                  </span>
                  <Typography variant='body1' sx={{ mb: '0.5rem' }}>
                    {/* {i18n.text(language, i18n.MAP.jobs_typog_momo_1)} */}
                    <span style={{ color: '#fffafa' }}>
                      React | Context | MUI | Jira | BitBucket | SourceTree | Slack
                    </span>
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      color: '#45669e',
                      lineHeight: '1.2',
                      fontFamily: "'Genos', Calibri, Ruda, sans-serif",
                      fontSize: '22px',
                      fontWeight: '500',
                    }}
                  >
                    {i18n.text(language, i18n.MAP.jobs_typog_freelance)}
                  </Typography>
                </Box>
              </>
            }
          />
        </ListItem>
        <ListItem alignItems='flex-start'>
          <ListItemText
            secondary={
              <>
                <Box sx={{ mb: '2rem', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h4' sx={{ color: '#fdfd96', marginBottom: '0.5rem' }}>
                    Freelance
                  </Typography>
                  <span
                    style={{
                      color: '#45669e',
                      marginBottom: '0.5rem',
                      fontSize: '22px',
                      fontFamily: "'Genos', Calibri, Ruda, sans-serif",
                      fontWeight: '500',
                    }}
                  >
                    Mar 2023 - Aug 2023
                  </span>
                  <Typography variant='body1' sx={{ mb: '0.5rem' }}>
                    {/* {i18n.text(language, i18n.MAP.jobs_typog_momo_1)} */}
                    <span style={{ color: '#fffafa' }}>
                      React | Context | MUI | Jira | BitBucket | SourceTree | Slack
                    </span>
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      color: '#45669e',
                      lineHeight: '1.2',
                      fontFamily: "'Genos', Calibri, Ruda, sans-serif",
                      fontSize: '22px',
                      fontWeight: '500',
                    }}
                  >
                    {i18n.text(language, i18n.MAP.jobs_typog_freelance)}
                  </Typography>
                </Box>
              </>
            }
          />
        </ListItem>
      </List>
    </div>
  )
}
