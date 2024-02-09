import { createSlice } from '@reduxjs/toolkit'

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
      authenticated: false
    },
    reducers: {
      logIn(state, action) {
        return {
          ...state,
          authenticated: action.payload
        };
      },
      logOut(state, action) {
        return {
          ...state,
          authenticated: action.payload
        };
      },
    },
  });
  
export const { logIn, logOut } = AuthSlice.actions
export default AuthSlice.reducer