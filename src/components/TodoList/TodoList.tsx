import { FC } from 'react'
import {
	Container,
	Divider,
	Chip,
	Box,
	Unstable_Grid2 as Grid,
} from '@mui/material'
import TodoForm from './TodoForm'
import { useAtomValue } from 'jotai'
import { notesAtom } from '@/jotai/todoJotai'
import { Helmet } from 'react-helmet'
import { FormProvider, useForm } from 'react-hook-form'
import TodoCard from './TodoCard'

const TodoList: FC = () => {
	const formMethods = useForm()
	const notes = useAtomValue(notesAtom)
	return (
		<>
			<Helmet>
				<title>Mini App | Todo</title>
			</Helmet>
			<FormProvider {...formMethods}>
				<Container maxWidth='md'>
					<TodoForm />
					<Divider
						textAlign='center'
						component='div'>
						<Chip
							label={`Notes (${notes.length})`}
							color={notes.length === 0 ? `error` : `default`}
							size='medium'
							sx={{ fontSize: '1rem', fontWeight: 600 }}
						/>
					</Divider>
				</Container>
				<Box sx={{ margin: '1rem' }}>
					{notes.length !== 0 && (
						<Grid
							container
							spacing={2}>
							{notes.map((note) => (
								<Grid
									xs={12}
									md={6}>
									<TodoCard
										key={note.id}
										note={note}
									/>
								</Grid>
							))}
						</Grid>
					)}
				</Box>
			</FormProvider>
		</>
	)
}

export default TodoList
