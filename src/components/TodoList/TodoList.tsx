import { FC } from 'react'
import {
  Container,
  Divider,
  Chip,
  Box,
  Table,
  TableHead,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material'
import TodoForm from './TodoForm'
import TodoIndividual from '@/components/TodoList/TodoIndividual'
import { useAtomValue } from 'jotai'
import { notesAtom } from '@/jotai/todoJotai'
import { Helmet } from 'react-helmet'
import { FormProvider, useForm } from 'react-hook-form'

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
          <Divider textAlign='center' component='div'>
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
            <TableContainer component={Paper}>
              <Table aria-label='todo table'>
                <colgroup>
                  <col style={{ width: '50%' }} />
                  <col style={{ width: '40%' }} />
                  <col style={{ width: '10%' }} />
                </colgroup>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {notes.map((note) => (
                    <TodoIndividual key={note.id} note={note} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </FormProvider>
    </>
  )
}

export default TodoList
