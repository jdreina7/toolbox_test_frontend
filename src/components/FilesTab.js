import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAsyncFilesData } from '../store/slice/filesData/thunk';
import FilesSpinner from './FilesSpinner';
import SuccessDataTable from './SuccessDataTable';


function FilesTab() {
  const dispatch = useDispatch();
  const { isLoading, successData } = useSelector(state => state.filesData);
  const transformedData = useMemo(() => {
    return successData.flatMap(item =>
      item.lines.map(line => ({
        file: item.file,
          ...line,
        }))
      );
  }, [successData])


  useEffect(() => {
    dispatch(getAsyncFilesData());
  }, []);
  

  return (
    <div>
      {isLoading && (
        <FilesSpinner />
      )}
      {!isLoading && successData.length > 0 && (
        <SuccessDataTable data={transformedData} />
      )}
    </div>
  );
}

export default FilesTab;