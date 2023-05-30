
import {configureStore} from "@reduxjs/toolkit";
import privateRoute from './slices/PrivateRouteSlice'
import modal from "./slices/ModalSlice";
export const store = configureStore({
  reducer: {
    privateRoute,
    modal
  }
})