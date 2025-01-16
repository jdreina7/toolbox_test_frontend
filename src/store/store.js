import { configureStore } from '@reduxjs/toolkit';

import { filesDataSlice } from './slice/filesData/filesDataSlice';
import { singleFileDataSlice } from './slice/singleFileDataSlice/singleFileDataSlice';

export const store = configureStore({
  reducer: { 
    filesData: filesDataSlice.reducer,
    singleFileData: singleFileDataSlice.reducer,
   },
});
