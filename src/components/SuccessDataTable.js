import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const SuccessDataTable = ({data}) => {
    const [filesData, setFilesData] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setFilesData(data);
        }
    }, [data]);

  return (
    <div>
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
          {filesData.map((row, index) => (
            <tr key={index}>
              <td>{row.file}</td>
              <td>{row.text}</td>
              <td>{row.number}</td>
              <td>{row.hex}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default SuccessDataTable;
