import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'

import { Box, Button } from '@mui/material'

export default function NotFound() {
  return (
    <Box sx={{ margin: '20px' }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <Link to={'/'} component={RouterLink}>
        <Button variant="contained"> Home</Button>
      </Link>
    </Box>
  )
}
