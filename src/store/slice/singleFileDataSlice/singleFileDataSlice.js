import { createSlice } from '@reduxjs/toolkit';

export const singleFileDataSlice = createSlice({
  name: 'files',
  initialState: {
    data: {},
    isLoading: false,
    error: null, // Nuevo estado para manejar errores
  },
  reducers: {
    getFileData: (state) => {
      state.isLoading = true;
      state.error = null; // Limpiar errores anteriores
    },
    setFileData: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    setFileError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error; // Almacenar el mensaje de error
    },
  },
});

export const { getFileData, setFileData, setFileError } = singleFileDataSlice.actions;
