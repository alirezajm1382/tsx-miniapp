import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import {
  Box,
  Chip,
  Typography,
  Stack,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import { theme } from '@components/shared/Theme'

const GallerySlug = () => {
  let { id } = useParams()
  const { isLoading, isError, data } = useQuery(`gallery-image-${id}`, () => {
    return axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
  })
  if (isLoading) {
    return (
      <Typography variant='h6' component='div'>
        Loading...
      </Typography>
    )
  } else if (isError) {
    return (
      <Typography variant='h6' component='div'>
        An error occurred
      </Typography>
    )
  } else {
    return (
      <>
        <Box
          sx={{
            width: {
              xs: '100vw',
              sm: theme.breakpoints.values.sm,
              lg: theme.breakpoints.values.lg,
            },
            margin: 'auto',
          }}
        >
          <Grid container marginTop='1rem' rowSpacing={2}>
            <Grid xs={12} md={6}>
              <Box
                display='flex'
                alignItems='center'
                margin='auto'
                width='fit-content'
              >
                <img
                  src={data?.data.url}
                  alt={data?.data.title}
                  width='300px'
                />
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Stack direction='column' spacing={3} alignItems='center'>
                <Typography variant='h5' fontWeight='700' textAlign='center'>
                  {data?.data.title}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  From album no.{data?.data.albumId}
                </Typography>
                <Chip
                  label={`#${data?.data.id}`}
                  sx={{ width: 'fit-content' }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </>
    )
  }
}

export default GallerySlug
