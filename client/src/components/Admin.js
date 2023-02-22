import React, { useState, useMemo, useLayoutEffect,useEffect } from 'react'
import { useFilters, useTable } from 'react-table';

import { CreateExam, ExamDetails, UpdateExam } from '../subComponent';
import { Columns } from '../data/columns';
//import {useApi } from '../hooks/use-api';

const Admin = () => {

  const [isCreateExam, setCreatExam] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isExamInf, setIsExamInf] = useState(false);
  const [getRowDataId, setGetRowDataId] = useState('');
  const [getRowData, setGetRowData] = useState({});
  // // const [exam, setExam] = useState({});
   //const { response } = useApi({ path: 'exams' });
  const [adminRowData, setAdminRowData] = useState()
  const [search, setSearch] = useState('');
  // const columns = useMemo(() => Columns, []);
  // //const data = useMemo(() => response, [response] );
  // const data = useMemo(() => adminRowData, [adminRowData] );
  const adminDataURL = 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams'

  const  handelSearch = (e) => {
    const value = e.target.value || undefined;
    //setFilter("keyFindings", value);
    setSearch(value);
  }
  const updateData = (e, rowId) => {
     adminRowData.filter(obj => {
       if(obj._id === rowId){
        setGetRowData(obj)
       }
    })

  }
  const handelExamInfo = (e, examId) => {
    e.preventDefault();
    setIsExamInf(!isExamInf)
    }

  useEffect(() => {
    const fetchPateientDetails = async () => {
        const rowData = await fetch(adminDataURL) 
          rowData.json().then(obj => {
          const newData =  obj.exams.map(obj => (
               {...obj, update: 'Update', delete: 'Delete'}
            ))
          setAdminRowData(newData);
        })  
     }
   fetchPateientDetails();
   }, [adminDataURL]);

  return (
    <>
      <div >
        { !(isCreateExam || isUpdate || isDeleted || isExamInf  ) &&
          <div>
            <div className='btn_sty'>
              <button className='btn btn-primary' onClick={() => setCreatExam(!isCreateExam)} >Create Exam</button>
            </div>        
            <div>
              <label className='sea-label'>Search:</label>
              <input 
                type='text' 
                id='search'
                name='search'
                value= {search}
                onChange= {handelSearch} />
            </div> 
            <div >
              <table className='table able_center'>
                <thead>
                  <tr>
                    {Columns.map((headers, id) =>  <th  key={id}>{headers.Header}</th>)}
                  </tr> 
                </thead>
                <tbody>
                    { adminRowData?.map((data) => {
                      return(
                        <> 
                        <tr key={data._id}>
                          <td>{data.patientId}</td>
                          <td> 
                            <button 
                              style={{color: 'blue'}} 
                              type='button' 
                              className="btn bg-transparent"
                              onClick= {e => handelExamInfo(e, data.examId)}>
                              {data.examId}
                            </button>
                          </td> 
                          <td><img className='image_sty' src={data.imageURL} alt=" " /></td>
                          <td>{data.keyFindings}</td>
                          <td>{data.brixiaScores}</td>
                          <td>{data.age}</td>
                          <td>{data.sex}</td>
                          <td>{data.bmi}</td>
                          <td>{data.zipCode}</td>
                          <td> 
                            <button 
                              style={{color: 'blue'}} 
                              type='button' className="btn bg-transparent"
                              onClick= {(e) =>  updateData(e, data._id) }>                                        
                              {data.update}
                            </button>
                          </td>
                          <td> 
                            <button 
                              style={{color: 'red'}} 
                              type='button' className="btn bg-transparent"
                              onClick= {() => setIsDeleted(!isDeleted) }>                                     
                              {data.delete}
                             </button>
                          </td>
                        </tr>
                        </>)       
                    })}     
                </tbody>
              </table>
            </div>
          </div>
        }
          {isCreateExam && <CreateExam />}
          {isDeleted && alert('Do you want to permanently delet this item')}
          {isUpdate && <UpdateExam update={getRowData} />}
          {isExamInf && < ExamDetails />}  
      </div>
    </>
    );
}
                   
export default Admin;
