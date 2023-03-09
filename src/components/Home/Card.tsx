import { Card as MuiCard, CardContent, CardActions } from '@mui/material'
import { ICard } from '../../interfaces/interfaces'
import { motion } from 'framer-motion'

const Card = ({ children, variant, action }: ICard) => {
	return (
		<motion.div whileHover={{ scale: 1.05 }}>
			<MuiCard
				variant={variant}
				sx={{
					height: '100%',
					width: 'auto',
					margin: 'auto',
					textAlign: 'initial',
					padding: 0,
				}}
				elevation={5}>
				<CardContent>{children}</CardContent>
				<CardActions>{action}</CardActions>
			</MuiCard>
		</motion.div>
	)
}

export default Card
