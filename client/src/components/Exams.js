import React, { useState, useMemo } from 'react';

import { useTable } from 'react-table';

import { ExamDetails, PatientDetails, Search } from '../subComponent';
import { Columns } from '../data/columns';
import fakeData from '../data/data.json';

const Exams = () => {
    const [isPatientInfo, setIsPatientInfo] = useState(false);
    const [isExamInfo, setIsExamInfo] = useState(false);
    
    const columns = useMemo(() => Columns, []);
    const data = useMemo(() => fakeData, []);

    const dataTable = useTable({ columns, data });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = dataTable;

    return (
        <>
            {!(isExamInfo || isPatientInfo) &&
                <div>
                    <div>
                        <Search />
                    </div>
                    <div> 
                        <table {...getTableProps()}  className='tableH table table-striped'>
                            <thead >                  
                                    { headerGroups.map((hg) => (
                                        <tr {...hg.getHeaderGroupProps()}>
                                          {
                                            hg.headers.map((column) => (
                                                <th {...column.getHeaderProps()}> {column.render('Header')} </th> 
                                                    ))
                                          } 
                                        </tr> ))
                                     }              
                            </thead>
                            <tbody {...getTableBodyProps()} >
                                    {
                                    rows.map(row => {
                                            prepareRow(row)
                                            return (
                                                <tr {...row.getRowProps()}>
                                                    {
                                                        row.cells.map((cell, id) => {
                                                        return <> 
                                                                {  <td  {...cell.getCellProps()}> {cell.render('Cell')} </td> }
                                                              </>})
                                                    }
                                                </tr> ) }) }  
                            </tbody >
                        </table> 
                  </div>        
            </div> }
            {isExamInfo && <ExamDetails />}
            {isPatientInfo && <PatientDetails />}
        </>
    );
}

export default Exams
