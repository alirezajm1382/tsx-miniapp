import { FC } from 'react'
import { AppBar, Toolbar, Button, Typography, Box, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { theme } from './Theme'
import {
  ViewList as TodoListIcon,
  PhotoLibrary as GalleryIcon,
} from '@mui/icons-material'

const Navbar: FC = () => {
  const navigate = useNavigate()
  return (
    <AppBar
      position='sticky'
      sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
    >
      <Toolbar variant='regular'>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant='h5'
            component='div'
            fontWeight='500'
            sx={{ cursor: 'pointer', width: 'fit-content' }}
            onClick={() => navigate('/')}
          >
            Todo App
          </Typography>
        </Box>
        <Stack direction='row' spacing={2} aria-label='navigation bar links'>
          <Button
            color='inherit'
            size={theme.breakpoints.up('xs') ? `large` : `small`}
            onClick={() => navigate('/gallery')}
            startIcon={<GalleryIcon />}
          >
            Gallery
          </Button>
          <Button
            color='inherit'
            size={theme.breakpoints.up('xs') ? `large` : `small`}
            onClick={() => navigate('/todo-list')}
            startIcon={<TodoListIcon />}
          >
            Todo List
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
