import {createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    inc(state) {
      state.count += 1;
    },
    dec(state) {
      state.count -= 1;
    },
  }
})

export const counterActions = counterSlice.actions;
export default counterSlice