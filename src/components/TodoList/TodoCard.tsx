import { FC, useState, MouseEvent } from 'react'
import { ITodoIndividual } from '@/interfaces/interfaces'
import {
	Card,
	CardContent,
	Typography,
	Menu,
	MenuItem,
	CardActions,
	IconButton,
} from '@mui/material'
import { MoreHoriz as ActionsIcon } from '@mui/icons-material'
import { useFormContext } from 'react-hook-form'
import { useAtom, useSetAtom } from 'jotai'
import { idDefaultAtom, notesAtom } from '@/jotai/todoJotai'

const TodoCard: FC<ITodoIndividual> = ({ note }) => {
	const { setValue } = useFormContext()
	const setIdDef = useSetAtom(idDefaultAtom)
	const [notes, setNotes] = useAtom(notesAtom)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClose = () => {
		setAnchorEl(null)
	}
	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	return (
		<>
			<Card variant='outlined'>
				<CardContent>
					<Typography variant='h5'>{note.name}</Typography>
					<Typography
						variant='body2'
						color='text.secondary'>
						{note.email}
					</Typography>
				</CardContent>
				<CardActions>
					<IconButton onClick={handleClick}>
						<ActionsIcon />
					</IconButton>
				</CardActions>
			</Card>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				sx={{ textAlign: 'center' }}>
				<Typography
					variant='caption'
					color='text.secondary'>
					#{note.id}
				</Typography>
				<MenuItem
					onClick={() => {
						setValue('name', note.name)
						setValue('email', note.email)
						setValue('id', note.id)
						setIdDef(note.id)
						handleClose()
					}}>
					Edit
				</MenuItem>
				<MenuItem
					onClick={() =>
						setNotes(notes.filter((_note) => note.id !== _note.id))
					}>
					Delete
				</MenuItem>
			</Menu>
		</>
	)
}

export default TodoCard
