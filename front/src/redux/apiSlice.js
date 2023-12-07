import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
    f: (state, action) => {
      state.value = action.payload
    },
    a: (state) => {
      state.value = state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const {f,a} = counterSlice.actions

export default counterSlice.reducer