import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { IoCloseCircle } from 'react-icons/io5'
import { LanguageContext } from '../../../context/LanguageContext'
import { Link } from 'react-router-dom'

//Import Language Library
import i18n from '../../../utils/i18n'

export const Jobs = () => {
  const { language } = useContext(LanguageContext)

  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')
  const [fullWidth, setFullWidth] = useState(true)
  const [maxWidth, setMaxWidth] = useState('md')

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className='jobs-container'>
      <div className='jobs-btn' onClick={() => setOpen((prev) => !prev)}>
        <span>{i18n.text(language, i18n.MAP.jobs_btn)}</span>
      </div>

      <Dialog
        scroll={scroll}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle
          sx={{
            color: '#fdfd96',
            fontWeight: '700',
            bgcolor: '#324972',
            fontFamily: "'Genos', Calibri, Ruda, sans-serif",
            fontSize: '35px',
          }}
        >
          {i18n.text(language, i18n.MAP.jobs_btn)}
        </DialogTitle>
        <IoCloseCircle
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontSize: '2rem',
            cursor: 'pointer',
          }}
          onClick={handleClose}
        />

        <DialogContent
          sx={{
            color: '#6084c3',
            fontSize: '20px',
            bgcolor: '#0c1e3a',
            fontFamily: "'Genos', Calibri, Ruda, sans-serif",
            fontWeight: '500',
          }}
        >
          {/* Money and More Zrt. */}
          <Box
            className='momo_container'
            sx={{ mb: '2rem', display: 'flex', flexDirection: 'column' }}
          >
            <Typography variant='h4' sx={{ color: '#fdfd96', marginBottom: '0.5rem' }}>
              Money and More Zrt.
            </Typography>
            <span style={{ color: '#45669e', marginBottom: '0.5rem' }}>Aug 2023 - Oct 2024</span>
            <Typography variant='body1' sx={{ mb: '0.5rem' }}>
              {i18n.text(language, i18n.MAP.jobs_typog_momo_1)}
              <span style={{ color: '#45669e' }}>
                React | React Native | Expo | CodeGPT | JWT | ReactDataGrid | Context | MUI | Jira |
                BitBucket | SourceTree | Slack
              </span>
            </Typography>
            <Typography variant='body1'>
              {i18n.text(language, i18n.MAP.jobs_typog_momo_2)}
            </Typography>
            {/* <Typography variant='body1'>
              {i18n.text(language, i18n.MAP.jobs_typog_momo_3)}
            </Typography>
            <Typography variant='body1'>
              {i18n.text(language, i18n.MAP.jobs_typog_momo_4)}
            </Typography>
            <Typography variant='body1'>
              {i18n.text(language, i18n.MAP.jobs_typog_momo_5)}
            </Typography> */}

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
                <span>{i18n.text(language, i18n.MAP.jobs_cover_btn)}</span>
              </Link>
            </Box>
          </Box>
          {/* Freelance */}
          <Box sx={{ mb: '2rem', display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4' sx={{ color: '#fdfd96', marginBottom: '0.5rem' }}>
              Freelance
            </Typography>
            <span style={{ color: '#45669e', marginBottom: '0.5rem' }}>Mar 2023 - Aug 2023</span>
            <Typography variant='body1'>
              {i18n.text(language, i18n.MAP.jobs_typog_freelance)}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}
