import {createSlice} from "@reduxjs/toolkit";

export const privateRouteSlice = createSlice({
  name: 'privateRoute',
  initialState: {
    isOver18: JSON.parse(localStorage.getItem('isOver18')) || false,

  },
  reducers: {
    setAuth(state, action) {
      state.isOver18 = Boolean(action.payload)
    }
  }
})

export const {setAuth} = privateRouteSlice.actions
export default privateRouteSlice.reducer