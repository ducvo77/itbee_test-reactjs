import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useAppSelector } from '../app/hook'
import ButtonDelete from '../components/ButtonDelete'
import MainLayout from '../components/MainLayout'
import { dataContact } from '../features/contactSlice'
import { searchValue } from '../features/searchSlice'
import ButtonAddContact from '../components/ButtonAddContact'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'

export default function HomePage() {
  const data: Contact[] = useAppSelector(dataContact)
  const value = useAppSelector(searchValue)
  const dataFilterByName = data.filter((item) =>
    item?.name.toLowerCase().includes(value?.toLowerCase())
  )

  return (
    <MainLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'end',
        }}
      >
        <ButtonAddContact />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">STT</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataFilterByName.length !== 0 ? (
                dataFilterByName.map((contact, index) => (
                  <TableRow
                    key={contact.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">{contact.name}</TableCell>
                    <TableCell align="center">{contact.email}</TableCell>
                    <TableCell align="center">{contact.phone}</TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1,
                          justifyContent: 'center',
                        }}
                      >
                        <Link component={RouterLink} to={'/edit/' + contact.id}>
                          <Button variant="outlined">Edit</Button>
                        </Link>

                        <ButtonDelete contactId={contact.id} />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">Contact Not Found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </MainLayout>
  )
}
