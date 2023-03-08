import { createTheme } from '@mui/material'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 900,
      lg: 1075,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#256A5B',
      light: '#3AA68F',
      dark: '#1B4B41',
    },
    secondary: {
      main: '#994853',
      light: '#BE747D',
      dark: '#7D3B42',
    },
    text: {
      primary: '#000100',
      secondary: '#666666',
    },
  },
})
