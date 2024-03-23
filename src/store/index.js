import { configureStore } from '@reduxjs/toolkit'
import AuthSlicer from './slicers/auth'
import HeaderSlicer from './slicers/header' ;

export const store = configureStore({
  reducer: {
    auth: AuthSlicer,
    header: HeaderSlicer,
  },
})

export * from './slicers/auth';
export * from './slicers/header';