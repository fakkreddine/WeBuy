import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './apiSlice'
import cartReducer from './cartslice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  }
    
  
})