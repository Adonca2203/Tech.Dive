import React from 'react'
import { useTable } from 'react-table'
import { Columns, examData } from '../data/index.js'


const ExamDetails = () => {
  const tableInstance = useTable({Columns, examData})


  const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
  } = tableInstance    
  
  return (
        <>
        <div>
          <h3>Exam Details</h3></div>
        <container>
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
      );
    }

  
  export default ExamDetails;
  