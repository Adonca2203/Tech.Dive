import React, { useState, useMemo } from 'react'
import { useTable } from 'react-table';

import { CreateExam, ExamDetails, UpdateExam, Search } from '../subComponent';
import { Columns } from '../data/columns';
import fakeData from '../data/data.json';

const Admin = () => {
    const [isCreateExam, setCreatExam] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isExamInf, setIsExamInf] = useState(false);

    const columns = useMemo(() => Columns, []);
    const data = useMemo(( )=> fakeData, [] );
  
    const dataTable = useTable({columns, data});
    const {
         getTableProps,
         getTableBodyProps,
         headerGroups,
         rows,
         prepareRow,
        } = dataTable;

    return (
        <>
         { !(isCreateExam || isUpdate || isDeleted || isExamInf) &&
           <div >
            <div className='btn_sty'>
              <button className='btn btn-primary' onClick={() => setCreatExam(!isCreateExam)} >Create Exam</button>
                </div>
                  <div> 
                   <Search />
                  </div>
                    <div>     
                      <table {...getTableProps()}  className='tableH table table-striped  '>
                        <thead  className='tableH'>                  
                                { headerGroups.map((hg) => (
                                    <tr {...hg.getHeaderGroupProps()}>
                                    <> 
                                      {hg.headers.map((column, id) => 
                                        (<th key={id} {...column.getHeaderProps()}> {column.render('Header')} </th> ))} 
                                      <td>Update</td>
                                      <td>Delete</td>
                                    </>
                                    </tr> ))
                                }              
                        </thead>
                        <tbody {...getTableBodyProps()} className='tableH' >
                                {
                                rows.map(row => {
                                     prepareRow(row)
                                    return (
                                         <> 
                                            <tr {...row.getRowProps()}>
                                                {
                                                    row.cells.map((cell, id) => {
                                                    return <td key={id} {...cell.getCellProps()}>{cell.render('Cell')} </td> })
                                                }
                                                <td> 
                                                    <button 
                                                        style={{color: 'blue'}} 
                                                        type='button' className="btn bg-transparent"
                                                        onClick= {() => setIsUpdate(!isUpdate) }
                                                        >
                                                    Update</button>
                                                </td>
                                                <td> 
                                                    <button 
                                                    style={{color: 'red'}} 
                                                    type='button' 
                                                    className="btn bg-transparent"
                                                    onClick= {() => setIsDeleted(!isDeleted) }>
                                                    Delete</button>
                                                    </td>
                                             </tr>  
                                          </>) })}           
                        </tbody>                                           
                      </table> 
                 </div>
              </div> }
            {isCreateExam && <CreateExam />}
            {isDeleted && alert('data deleted')}
            {isUpdate && <UpdateExam />}
            {isExamInf && <ExamDetails />}
        </>
    );
}
                        
export default Admin;
