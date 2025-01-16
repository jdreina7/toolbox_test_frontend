import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const ErrorDataTable = ({data}) => {
    const [errorFilesData, setErrorFilesData] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setErrorFilesData(data);
        }
    }, [data]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Error Type</th>
            <th>Error Line</th>
          </tr>
        </thead>
        <tbody>
          {errorFilesData.map((row, index) => (
            <tr key={index}>
              <td>{row.file}</td>
              <td>{row.error}</td>
              <td>Line #{row.errorLine}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ErrorDataTable;
