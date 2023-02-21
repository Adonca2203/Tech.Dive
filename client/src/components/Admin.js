import React, { useState, useMemo, useEffect } from 'react'
import { useFilters, useTable } from 'react-table';

import { CreateExam, ExamDetails, UpdateExam } from '../subComponent';
import { Columns } from '../data/columns';
//import fakeData from '../data/data.json';
import {useApi } from '../hooks/use-api';

const Admin = () => {
  const [isCreateExam, setCreatExam] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isExamInf, setIsExamInf] = useState(false);
  //const [exam, setExam] = useState({});
  const [adminRowData , setAdminRowData] = useState([]);
  const [search, setSearch] = useState('');
  const { response: exams } = useApi({ path: 'exams' });
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => exams, [exams] );
  console.log()
  const adminDataURL = 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams'
  
  const dataTable = useTable({columns, exams }, useFilters );
  const {
         getTableProps,
         getTableBodyProps,
         headerGroups,
         rows,
         prepareRow,
         setFilter,
        } = dataTable;

 const  handelSearch = (e) => {
    const value = e.target.value || undefined;
    setFilter("keyFindings", value);
    setSearch(value);
  }
  
const handelExamInfo = (e, examId) => {
   e.preventDefault();
   setIsExamInf(!isExamInf)
  }
  
useEffect(() => {
    const fetchPateientDetails = async () => {
        const rowData = await fetch(adminDataURL) 
          rowData.json().then(obj => {
          console.log(obj.exams);
          setAdminRowData(obj.exams);
        })  
     }
     //console.log(adminRowData)
   //fetchPateientDetails();
   }, [adminDataURL]);

  return (
    <>
     { !(isCreateExam || isUpdate || isDeleted || isExamInf) &&
        <div >
          <div className='btn_sty'>
             <button className='btn btn-primary' onClick={() => setCreatExam(!isCreateExam)} >Create Exam</button></div>        
             <div>
       <label className='sea-label'>Search:</label>
        <input 
           type='text' 
           id='search'
           name='search'
           value= {search}
           onChange= {handelSearch} />
    </div> 
           <div>     
              <table {...getTableProps()}  className='tableH table table-striped  '>
                 <thead  className='tableH'>                  
                    { headerGroups.map((hg) => (
                       <tr {...hg.getHeaderGroupProps()}>
                        <> 
                           {hg.headers.map((column, index) => 
                            (<th key={index} {...column.getHeaderProps()}> {column.render('Header')} </th> ))} 
                            <th>Update</th>
                            <th>Delete</th>  
                         </>
                      </tr> )) }                                        
                 </thead>
                 <tbody {...getTableBodyProps()} className='tableH' >
                      {rows.map((row, id) => {
                      prepareRow(row)                              
                      return (
                       <> 
                         <tr key={id} {...row?.getRowProps()}>
                               { row?.cells?.map((cell, id) => {
                                return <> 
                                  {!(cell.getCellProps().key.split('_')[2] === 'examId' || 
                                   cell.getCellProps().key.split('_')[2] === "imageURL") &&
                                    <td key={id} {...cell.getCellProps()}>
                                     {cell.render('Cell') }</td>
                                 }
                                 {(cell.getCellProps().key.split('_')[2] === "imageURL") &&
                                    <td key={id} {...cell?.getCellProps()}> 
                                     <img style={{width: "100px", height: '80px'}} src={cell.value} alt=" " /> </td>

                                }
                                 { (cell.getCellProps().key.split('_')[2] === 'examId') &&
                                    <td key={id} > 
                                        <button 
                                        style={{color: 'blue'}} 
                                        type='button' 
                                        className="btn bg-transparent"
                                        onClick= {e => handelExamInfo(e, cell.value)}>
                                      {cell.value}</button>
                                    </td> 
                                  }         
                                  </>
                                })}                                                                                         
                          <td> 
                             <button 
                             style={{color: 'blue'}} 
                             type='button' className="btn bg-transparent"
                             onClick= {() => setIsUpdate(!isUpdate) }>   {}                                      
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
         {isDeleted && alert('Do you want to permanently delet this item')}
         {isUpdate && <UpdateExam />}
         {isExamInf && < ExamDetails />}
     </>
    );
}
                        
export default Admin;
