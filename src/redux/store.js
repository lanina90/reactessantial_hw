
import {configureStore} from "@reduxjs/toolkit";
import privateRoute from './PrivateRouteSlice'
export const store = configureStore({
  reducer: {
    privateRoute
  }
})