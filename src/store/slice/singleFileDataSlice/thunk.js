import { filesApi } from "../../../api/filesApi";

import { getFileData, setFileData, setFileError } from "./singleFileDataSlice";

export const getAsyncSingleFileData = (filename = '') => {
    return async (dispatch) => {
        dispatch(getFileData());
        try {
            const { data } = await filesApi.get(`/data?fileName=${filename}`);
            dispatch(setFileData({ data }));
            return data; // Devolver los datos explícitamente
        } catch (error) {
            dispatch(setFileError({ error: error.message || 'An unexpected error occurred' }));
            return null; // Devolver null en caso de error
        }
    };
};


