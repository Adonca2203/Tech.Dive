// baseline found here: https://react-table-v7.tanstack.com/docs/quick-start

import React from 'react'
import { useTable } from 'react-table'

const ExamDetails = () => {

  // const data = React.useMemo(
  //   () => [
  //     {
  //       col1: 'Hello',
  //       col2: 'World',
  //     },
  //     {
  //       col1: 'react-table',
  //       col2: 'rocks',
  //     },
  //     {
  //       col1: 'whatever',
  //       col2: 'you want',
  //     },
  //   ],
  //   []
  // )

  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: 'Column 1',
  //       accessor: 'col1', // accessor is the "key" in the data
  //     },
  //     {
  //       Header: 'Column 2',
  //       accessor: 'col2',
  //     },
  //   ],
  //   []
  // )
  const tableInstance = useTable({})

const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
} = tableInstance

  return (
    <>
    <div><h3>Exam Details</h3></div>
    //<container>
      <input>Search</input>
    </container>
    
    <container>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps ()}>
          {
            rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell => {
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            cell.render('Cell')
                          }                          
                        </td>
                      )
                    })
                  }
                
              </tr>
              )
            })
          }
         
        </tbody>
      </table>
    </container>


    </>
  )
}

export default ExamDetails;