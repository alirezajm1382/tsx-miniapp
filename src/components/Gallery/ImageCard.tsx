import { IImageCard } from '@/interfaces/interfaces'
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material'
import { motion } from 'framer-motion'
const ImageCard = ({ image }: IImageCard) => {
  return (
    <motion.div whileHover={{ scale: 1.03 }}>
      <Card
        variant='elevation'
        sx={{
          maxWidth: 345,
          height: 345,
          margin: 'auto',
        }}
      >
        <CardMedia
          sx={{ height: 235 }}
          image={image.url}
          title={image.id.toString()}
        >
          <Chip
            label={`# ${image.id}`}
            color='info'
            sx={{
              backgroundColor: (theme) => theme.palette.primary.dark,
              color: (theme) => theme.palette.getContrastText.toString(),
              margin: '0.35rem',
            }}
          />
        </CardMedia>
        <CardContent>
          <Typography
            lineHeight='30px'
            whiteSpace='pre-line'
            overflow='hidden'
            textOverflow='ellipsis'
            variant='body1'
          >
            {` ` + image.title}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ImageCard
