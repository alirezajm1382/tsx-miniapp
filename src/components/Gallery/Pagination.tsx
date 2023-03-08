import { IconButton, Paper, Stack } from '@mui/material'
import {
  ArrowForward as ForwardIcon,
  ArrowBack as BackwardIcon,
} from '@mui/icons-material'
import { useAtom } from 'jotai'
import { pageAtom } from '@/jotai/galleryJotai'
import { motion } from 'framer-motion'

const Pagination = () => {
  const [page, setPage] = useAtom(pageAtom)
  return (
    <Paper
      sx={{
        borderRadius: 15,
        position: 'fixed',
        transform: 'translate(-50%,0)',
        backgroundColor: (theme) => theme.palette.primary.main,
        left: '50%',
        bottom: 20,
        padding: 2,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Stack direction='row' spacing={2}>
          <IconButton
            disabled={page === 0 ? true : false}
            onClick={() => setPage(page - 1)}
            sx={{ color: (theme) => theme.palette.background.default }}
          >
            <BackwardIcon />
          </IconButton>
          <IconButton
            onClick={() => setPage(page + 1)}
            sx={{ color: (theme) => theme.palette.background.default }}
          >
            <ForwardIcon />
          </IconButton>
        </Stack>
      </motion.div>
    </Paper>
  )
}

export default Pagination
