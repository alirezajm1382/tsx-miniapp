import {
  TableRow,
  TableCell,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { MouseEvent, useState } from 'react'
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material'
import { ITodoIndividual } from '@/interfaces/interfaces'
import { useAtom, useSetAtom } from 'jotai'
import {
  nameDefaultAtom,
  emailDefaultAtom,
  idDefaultAtom,
  notesAtom,
} from '@/jotai/todoJotai'

const TodoIndividual = ({ note }: ITodoIndividual) => {
  const setNameDef = useSetAtom(nameDefaultAtom)
  const setEmailDef = useSetAtom(emailDefaultAtom)
  const setIdDef = useSetAtom(idDefaultAtom)
  const [notes, setNotes] = useAtom(notesAtom)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  return (
    <TableRow>
      <TableCell>{note.name}</TableCell>
      <TableCell>{note.email}</TableCell>
      <TableCell>
        <IconButton size='large' onClick={handleClick}>
          <MoreHorizIcon />
        </IconButton>
      </TableCell>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ textAlign: 'center' }}
      >
        <Typography variant='body2' color='text.secondary' padding='0.5rem'>
          #{note.id}
        </Typography>
        <MenuItem
          onClick={() => {
            setEmailDef(note.email)
            setIdDef(note.id)
            setNameDef(note.name)
            handleClose()
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() =>
            setNotes(notes.filter((_note) => note.id !== _note.id))
          }
        >
          Delete
        </MenuItem>
      </Menu>
    </TableRow>
  )
}

export default TodoIndividual
