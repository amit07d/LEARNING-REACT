import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
    pastes: localStorage.getItem("pastes")
        ? JSON.parse(localStorage.getItem('pastes'))
        : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste = action.payload;
      state.pastes.push(paste)
      localStorage.setItem('pastes', JSON.stringify(state.pastes)),
        toast('Paste created sucessfully');
    },
      updateToPastes: (state, action) => {
        const { _id, content } = action.payload;
        const paste = state.pastes.find(p => p._id === _id)
        if (paste) {
        paste.content = content;
        localStorage.setItem('pastes', JSON.stringify(state.pastes))
        toast('paste updated sucessfully')
      } else {
          toast.error('paste not found')
      }
    },
    resetAllPastes: (state) => {
      state.pastes = []
      localStorage.setItem('pastes', JSON.stringify(state.pastes))
      toast('paste resets sucessfully')
    },
    removeFromPastes: (state, action) => {
      const  pasteid  = action.payload; // Ensure payload includes { id }
      state.pastes = state.pastes.filter(paste => paste._id !== pasteid);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast('Paste removed successfully');
   },
   
    
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes,  resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer   