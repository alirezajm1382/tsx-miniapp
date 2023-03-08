import { Card as MuiCard, CardContent, CardActions } from '@mui/material'
import { ICard } from '../../interfaces/interfaces'

const Card = ({ children, variant, action }: ICard) => {
  return (
    <MuiCard
      variant={variant}
      sx={{
        height: '100%',
        width: 'auto',
        margin: 'auto',
        textAlign: 'initial',
        padding: 0,
      }}
      elevation={5}
    >
      <CardContent>{children}</CardContent>
      <CardActions>{action}</CardActions>
    </MuiCard>
  )
}

export default Card
