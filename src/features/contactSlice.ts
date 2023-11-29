import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

interface initialStateType {
  data: Contact[]
}

const initialState: initialStateType = {
  data: [
    {
      id: 1,
      name: 'congduc 1',
      email: 'congductp1@gmail.com',
      phone: 84375382487,
    },
    {
      id: 2,
      name: 'congduc 2',
      email: 'congductp1@gmail.com',
      phone: 84375382487,
    },
    {
      id: 3,
      name: 'congduc 3',
      email: 'congductp1@gmail.com',
      phone: 84375382487,
    },
    {
      id: 4,
      name: 'congduc 4',
      email: 'congductp1@gmail.com',
      phone: 84375382487,
    },
    {
      id: 5,
      name: 'congduc 5',
      email: 'congductp1@gmail.com',
      phone: 84375382487,
    },
    {
      id: 6,
      name: 'congduc 6',
      email: 'congductp1@gmail.com',
      phone: 84375382487,
    },
  ],
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: () => {},

    editContact: () => {},

    deleteContact: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((c) => c.id !== action.payload)
    },
  },
})

// Actions
export const contactActions = contactSlice.actions

// Selectors
export const dataContact = (state: RootState) => state.contact.data

// Reducers
const contactReducer = contactSlice.reducer
export default contactReducer
