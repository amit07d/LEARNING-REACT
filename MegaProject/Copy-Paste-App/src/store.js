import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/pasteSlice'

export default configureStore({
    reducer: {
      paste: pasteReducer
  },
})