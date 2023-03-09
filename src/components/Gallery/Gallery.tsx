import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Container, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import { TImageCard } from '@/interfaces/interfaces'
import ImageCard from '@components/Gallery/ImageCard'
import { theme } from '@components/shared/Theme'
import { Link } from 'react-router-dom'
import Pagination from '@components/Gallery/Pagination'
import { useAtomValue } from 'jotai'
import { pageAtom } from '@/jotai/galleryJotai'
import { motion } from 'framer-motion'

const Gallery: FC = () => {
	const page = useAtomValue(pageAtom)
	const { isLoading, isError, data } = useQuery(
		['gallery-images', page],
		() => {
			return axios.get(
				`https://jsonplaceholder.typicode.com/photos?_start=${
					page * 12
				}&_limit=12`,
			)
		},
	)
	return (
		<>
			<Helmet>
				<title>Mini App | Gallery</title>
			</Helmet>
			<Container
				maxWidth='lg'
				sx={{
					marginTop: '1rem',
					marginBottom: '3rem',
					width: {
						xs: '100%',
						sm: theme.breakpoints.values.sm,
						lg: theme.breakpoints.values.lg,
					},
				}}>
				<Grid
					container
					spacing={2}>
					{isLoading && (
						<Typography
							variant='h6'
							component='div'>
							Loading...
						</Typography>
					)}
					{isError && (
						<Typography
							variant='h6'
							component='div'>
							An error occurred
						</Typography>
					)}
					{data?.data.map((obj: TImageCard) => (
						<Grid
							key={obj.id}
							xs={12}
							sm={6}
							lg={4}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}>
								<Link
									to={`/gallery/${obj.id}`}
									style={{ textDecoration: 'none' }}>
									<ImageCard image={obj} />
								</Link>
							</motion.div>
						</Grid>
					))}
				</Grid>
				<Pagination />
			</Container>
		</>
	)
}

export default Gallery
