import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { PERSIST, persistReducer, persistStore } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import contactReducer from '../features/contactSlice'
import searchReducer from '../features/searchSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  contact: contactReducer,
  search: searchReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)
