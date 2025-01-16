import { useEffect, useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';

import { getAsyncFilesData } from '../store/slice/filesData/thunk';
import FilesSpinner from './FilesSpinner';

function FilesTab() {
  const dispatch = useDispatch();
  const { isLoading, successData, errorsData } = useSelector(state => state.filesData);
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {transformedData.map((row, index) => (
            <tr key={index}>
              <td>{row.file}</td>
              <td>{row.text}</td>
              <td>{row.number}</td>
              <td>{row.hex}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      )}
    </div>
  );
}

export default FilesTab;