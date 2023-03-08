import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '@components/Home/Home'
import Gallery from '@components/Gallery/Gallery'
import GallerySlug from '@components/Gallery/GallerySlug'
import TodoList from '@components/TodoList/TodoList'
import { Box } from '@mui/system'
import { AnimatePresence, motion } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Box sx={{ maxWidth: '1236px', marginTop: '1rem', margin: 'auto' }}>
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path='/gallery'
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Gallery />
              </motion.div>
            }
          />
          <Route
            path='/gallery/:id'
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <GallerySlug />
              </motion.div>
            }
          />
          <Route
            path='/todo-list'
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TodoList />
              </motion.div>
            }
          />
        </Routes>
      </Box>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
