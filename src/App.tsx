import '@/App.css'
import Navbar from '@/components/shared/Navbar'
import { QueryClientProvider, QueryClient } from 'react-query'
import AnimatedRoutes from '@/AnimatedRoutes'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Navbar />
        <AnimatedRoutes />
      </div>
    </QueryClientProvider>
  )
}

export default App
