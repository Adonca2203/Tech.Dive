import React, { useState,useEffect } from 'react'
import { NavLink} from 'react-router-dom';
import { Columns } from '../data/columns';
import { UpdateExam } from '../subComponent';
//import {useApi } from '../hooks/use-api';

const Admin = () => {
    
    const [isUpdate, setIsUpdate] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);
    const [isExamInf, setIsExamInf] = useState(false);
    const [getRowDataId, setGetRowDataId] = useState('');
    const [getRowData, setGetRowData] = useState({});
    const [adminRowData, setAdminRowData] = useState()
    const [search, setSearch] = useState('');
    const adminDataURL = 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams'

    const  handelSearch = (e) => {
      const value = e.target.value || undefined;
      setSearch(value);
    } 

    const updateData = (e, rowId) => {
      setSelectedId(rowId);
      adminRowData.filter(obj => {
          if(obj._id === rowId )
            setGetRowData(obj)
        });
        setIsUpdate(!isUpdate);
      }
    
    const handelExamInfo = (e, examId) => {
      e.preventDefault();
      setIsExamInf(!isExamInf);
      }

    const deleteData = (e, rowId) => {
      alert(`Do you want to permanently delet this item ${getRowDataId}`)  
     }

    useEffect(() => {
      const fetchPateientDetails = async () => {
          const res = await fetch(adminDataURL); 
            res.json().then(obj => {
            const newData =  obj.exams.map(obj => (
                {...obj, update: 'Update', delete: 'Delete'}
              ))
            setAdminRowData(newData);
          }) }  
        if(search){
          const filteredData = adminRowData.filter(obj =>  obj.keyFindings.match(search), ) 
          setAdminRowData(filteredData);
        }
        else  fetchPateientDetails();

      }, [adminDataURL, search, adminRowData]);
    
    return (
      <>
        <div >
          { !(isUpdate || isDeleted || isExamInf  ) &&
            <div>
              <div className='btn_sty'>
                <NavLink style={{color: 'white'}} to='/exams/create' >
                  <button className='btn btn-primary'>Create Exam </button>    
                </NavLink>  
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
                <table className='table table_center'>
                  <thead>
                    <tr>
                      {Columns.map((headers, id) =>  <th  key={id}>{headers.Header}</th>)}
                    </tr> 
                  </thead>
                  <tbody>
                      { adminRowData?.map((data) => {
                        return(
                          <> 
                          <tr key={data._id} className="tr_row">
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
                                onClick= {(e) =>  deleteData(e, data._id) }>                                     
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
            {isDeleted && alert(`Do you want to permanently delet this item ${getRowDataId}`)}
             {isUpdate && <UpdateExam update={getRowData} />}
        </div>
      </>
      );
  }

export default Admin;
