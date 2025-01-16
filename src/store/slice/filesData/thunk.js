import { filesApi } from "../../../api/filesApi";
import { getFilesData, setFilesData } from "./filesDataSlice";

export const getAsyncFilesData = () => {
    return async( dispatch, getState ) => {
       dispatch(getFilesData());

        const { data } = await filesApi.get('/data');

       dispatch( setFilesData({ successData: data.successData, errorsData: data.errorsData }) );
    }
}
