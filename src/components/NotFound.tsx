import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { useRouteError } from 'react-router-dom'
import { Box, Button } from '@mui/material'

export default function NotFound() {
  const error: any = useRouteError()

  return (
    <Box sx={{ margin: '20px' }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'} component={RouterLink}>
        <Button variant="contained"> Home</Button>
      </Link>
    </Box>
  )
}
