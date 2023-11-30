import Box from '@mui/material/Box'
import Header from './Header'
import { Container } from '@mui/material'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%' }}>
      <Header />
      <Container sx={{ marginTop: '40px', padding: '0 20px' }}>
        {children}
      </Container>
    </Box>
  )
}
