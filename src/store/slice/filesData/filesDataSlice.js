import { createSlice } from '@reduxjs/toolkit'

export const filesDataSlice = createSlice({
  name: 'files',
  initialState: {
    successData: [],
    errorsData: [],
    isLoading: false
  },
  reducers: {
    getFilesData: (state) => {
      state.isLoading = true;
    },
    setFilesData: (state, action) => {
      state.isLoading = false;
      state.successData = action.payload.successData;
      state.errorsData = action.payload.errorsData;
    }
  },
})

export const { getFilesData, setFilesData } = filesDataSlice.actions
