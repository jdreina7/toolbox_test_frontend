import { configureStore } from '@reduxjs/toolkit';
import { filesDataSlice } from './slice/filesData/filesDataSlice';

export const store = configureStore({
  reducer: { 
    filesData: filesDataSlice.reducer,
   },
});
