import { createSlice } from '@reduxjs/toolkit'

const HeaderSlice = createSlice({
    name: 'header',
    initialState: {
      headername: null,
      cartItems: null,
      cartItemsCount: null,
      
    },
    reducers: {
      setHeader(state, action) {
        return {
          ...state,
          headername: action.payload.headerName,
          cartItems: action.payload.cartItems,
          cartItemsCount: action.payload.cartItemsCount
        };
      },
      clearHeader(state) {
        return {
          ...state,
          headername: null,
          cartItems: null,
          cartItemsCount: null
        };
      },
    },
  });
  
export const { setHeader, clearHeader } = HeaderSlice.actions
export default HeaderSlice.reducer