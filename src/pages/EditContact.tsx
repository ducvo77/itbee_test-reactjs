import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hook'
import MainLayout from '../components/MainLayout'
import { contactActions, dataContact } from '../features/contactSlice'
import { validationContact } from '../utils/validationContact'

export default function EditContactPage() {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const data: Contact[] = useAppSelector(dataContact)

  const formik = useFormik({
    initialValues: data.filter((c) => c.id === Number(params.id))[0],
    validationSchema: validationContact,
    onSubmit: (values: Contact) => {
      dispatch(contactActions.editContact(values))
      formik.resetForm()
      navigate('/')
    },
  })

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <MainLayout>
      <Box>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', fontSize: '2rem', mb: 2, fontWeight: 400 }}
        >
          Edit Contact
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              padding: '8px 0',
            }}
          >
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              type="tel"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Box>
          <Box sx={{ mt: 1 }}>
            <Button onClick={handleCancel} size="large" variant="outlined">
              Cancel
            </Button>
            <Button
              autoFocus
              variant="contained"
              color="success"
              type="submit"
              sx={{ ml: 1 }}
              size="large"
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </MainLayout>
  )
}
