import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Columns } from '../data/columns';
import { UpdateExam } from '../subComponent';
import { useApi } from '../hooks/use-api';
import CreateExam from "../subComponent/CreateExam"

const Admin = () => {

    const [isUpdate, setIsUpdate] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);
    const [isExamInf, setIsExamInf] = useState(false);
    const [getRowDataId, setGetRowDataId] = useState('');
    const [getRowData, setGetRowData] = useState({});
    const [adminNewRowData, setAdminNewRowData] = useState();
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const {response: exams} = useApi({path: "exams"});
    const {response: patients} = useApi({path: "patients"});
    //const { response } = useApi({ path: `exams/${exam._id}`}, { method: 'DEL' });

    const  handelSearch = (e) => {
      const value = e.target.value || undefined;
      setSearch(value);
    } 
    
    const updateData = (e, rowId) => {
      setSelectedId(rowId);
      const selectedPati =  adminNewRowData.find(obj => obj.patientID === rowId );
        setGetRowData(selectedPati);
        setIsUpdate(!isUpdate);
    }

    const handelExamInfo = (e, examId) => {
        e.preventDefault();
        setIsExamInf(!isExamInf);
    }

    const deleteData = (e, rowId) => {
      alert(`Do you want to permanently delet this item ${rowId}`);
       const deletExam = {
        methods: "DELETE"
       };
          fetch(`http://localhost:9000/exams/${rowId}`,deletExam)
          .then(res => res.json())
          .then(data => setStatus(data));
          setGetRowDataId(rowId);
      
    }

    useEffect(() => {
      if(exams && patients) {
        const mergeData = exams.map(eobj => 
          ({ ...patients.find((pobj) => (pobj._id === eobj.patientID) && pobj), ...eobj  }));
          setAdminNewRowData(mergeData);
      }
      if(search){
          const filteredData = adminNewRowData.filter(obj =>  obj.keyFindings.match(search), ) 
          setAdminNewRowData(filteredData);
        }
      
    }, [exams, search,]);
    
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
              <div className='colAdm'>
                <table className='table table_center'>
                  <thead>
                    <tr>
                      {Columns.map((headers, id) =>  <th  key={id}>{headers.Header}</th>)}
                    </tr> 
                  </thead>
                  <tbody>
                      { adminNewRowData?.map((data) => {
                        return( 
                          <> 
                          <tr key={data._id} className="tr_row">
                            <td>{data.patientID}</td>
                            <td>                       
                              <button 
                                style={{color: 'blue'}} 
                                type='button' 
                                className="btn bg-transparent"
                                onClick= {e => handelExamInfo(e, data._id)}>
                                {data._id}
                              </button>
                            </td> 
                            <td><img className='image_sty' src={data.image} alt=" " /></td>
                            <td>{data.keyFindings}</td>
                            <td>{data.brixiaScore.map(data => `${data},`)}</td>
                            <td>{data.age}</td>
                            <td>{data.sex}</td>
                            <td>{data.bmi}</td>
                            <td>{data.zipCode}</td>
                            <td> 
                               <button 
                                 style={{color: 'blue'}} 
                                 type='button' className="btn bg-transparent"
                                 onClick= {(e) =>  updateData(e, data.patientID) }>                                        
                                 Update
                                 </button>                   
                            </td>
                            <td> 
                              <button 
                                style={{color: 'red'}} 
                                type='button' className="btn bg-transparent"
                                onClick= {(e ) =>  deleteData(e, data._id) }>                                     
                                Delete
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
            {isUpdate && <UpdateExam update={getRowData} />}
        </div>
      </>
      );
  }

export default Admin;
