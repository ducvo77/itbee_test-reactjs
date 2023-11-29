import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

interface initialStateType {
  value: string
}

const initialState: initialStateType = {
  value: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    enterValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Actions
export const searchActions = searchSlice.actions

// Selectors
export const searchValue = (state: RootState) => state.search.value

// Reducers
const searchReducer = searchSlice.reducer
export default searchReducer
