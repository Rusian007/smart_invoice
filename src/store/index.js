import { configureStore } from '@reduxjs/toolkit'
import AuthSlicer from './slicers/auth'


export const store = configureStore({
  reducer: {
    auth: AuthSlicer,
  },
})

export * from './slicers/auth';