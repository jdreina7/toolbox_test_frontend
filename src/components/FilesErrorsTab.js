
import { useSelector } from 'react-redux';

import FilesSpinner from './FilesSpinner';
import ErrorDataTable from './ErrorDataTable';


function FilesErrorsTab() {
  const { isLoading, errorsData } = useSelector(state => state.filesData);
  

  return (
    <div>
      {isLoading && (
        <FilesSpinner />
      )}
      {!isLoading && errorsData.length > 0 && (
        <ErrorDataTable data={errorsData} />
      )}
    </div>
  );
}

export default FilesErrorsTab;