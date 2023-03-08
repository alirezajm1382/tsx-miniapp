import { FC, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Button, TextField, useTheme, Input } from '@mui/material'
import { TNote } from '@/interfaces/interfaces'
import { useForm } from 'react-hook-form'
import { customAlphabet } from 'nanoid'
import { useAtom } from 'jotai'
import {
  notesAtom,
  nameDefaultAtom,
  idDefaultAtom,
  emailDefaultAtom,
} from '@/jotai/todoJotai'
import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material'

const TodoForm: FC = () => {
  const [notes, setNotes] = useAtom(notesAtom)
  const [nameDef, setNameDef] = useAtom(nameDefaultAtom)
  const [emailDef, setEmailDef] = useAtom(emailDefaultAtom)
  const [idDef, setIdDef] = useAtom(idDefaultAtom)
  const theme = useTheme()
  const nanoid = customAlphabet('0123456789', 6)
  const { handleSubmit, register, setValue, reset } = useForm<TNote>()
  const onSubmitForm = handleSubmit((data) => {
    if (idDef === 0) {
      setNotes([...notes, { ...data, id: +nanoid() }])
    } else {
      let index = -1
      let temp = notes.filter((_note) => {
        return _note.id === data.id
      })
      index = notes.indexOf(temp[0])
      setNotes([...notes.slice(0, index), data, ...notes.slice(index + 1)])
    }
    if (idDef === 0) {
      reset()
    } else {
      setNameDef('')
      setEmailDef('')
      setIdDef(0)
    }
  })

  useEffect(() => {
    setValue('name', nameDef)
    setValue('email', emailDef)
    setValue('id', idDef)
  }, [nameDef, emailDef, idDef, setValue])

  return (
    <form onSubmit={onSubmitForm}>
      <Grid container spacing={2} sx={{ marginY: '5vh' }}>
        <Input type='hidden' defaultValue={0} {...register('id')} />
        <Grid xs={12} sm={6}>
          <TextField
            label='Name'
            placeholder='John Doe'
            type='text'
            required
            fullWidth
            {...register('name')}
            defaultValue={''}
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField
            label='Email'
            placeholder='johndoe@email.com'
            type='email'
            required
            fullWidth
            {...register('email')}
            defaultValue={''}
          />
        </Grid>

        <Grid xs={12}>
          <Button
            startIcon={idDef === 0 ? <AddIcon /> : <EditIcon />}
            type='submit'
            variant='contained'
            color={idDef === 0 ? `primary` : `secondary`}
            size='large'
            sx={{
              width: '200px',
              [theme.breakpoints.only('xs')]: {
                width: '100%',
              },
            }}
          >
            {idDef === 0 ? `Submit` : `Edit`}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default TodoForm
