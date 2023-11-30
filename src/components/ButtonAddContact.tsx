import AddIcon from '@mui/icons-material/Add'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import * as React from 'react'
import { useAppDispatch } from '../app/hook'
import { contactActions } from '../features/contactSlice'
import { validationContact } from '../utils/validationContact'

export default function ButtonAddContact() {
  const [open, setOpen] = React.useState(false)
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      id: NaN,
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: validationContact,
    onSubmit: (values: Contact) => {
      setOpen(false)
      dispatch(contactActions.addContact(values))
      formik.resetForm()
    },
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="success"
        onClick={handleClickOpen}
      >
        Add Contact
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle id="alert-dialog-title">
            Do you want to add a contact?
          </DialogTitle>
          <DialogContent>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button autoFocus variant="contained" color="success" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  )
}
