import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import HomePage from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import NotFound from './components/NotFound'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <NotFound />,
    },
  ])

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </CssVarsProvider>
  )
}

export default App
