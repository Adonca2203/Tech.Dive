import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Columns } from '../data/columns';
import { UpdateExam } from '../subComponent';
import { useApi } from '../hooks/use-api';
import Exam from '../subComponent/Exam';

const Admin = () => {

    const [isUpdate, setIsUpdate] = useState(false);
    const [isExam, setIsExam] = useState(false);
    const [examData, setExamData] = useState({});
    const [selectedId, setSelectedId] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);
    const [isExamInf, setIsExamInf] = useState(false);
    const [getRowDataId, setGetRowDataId] = useState('');
    const [getRowData, setGetRowData] = useState({});
    const [adminNewRowData, setAdminNewRowData] = useState();
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const { response: exams } = useApi({ path: "exams" });
    const { response: patients } = useApi({ path: "patients" });

    const handelSearch = (e) => {
        const value = e.target.value || undefined;
        setSearch(value);
    }

    const updateData = (e, rowId) => {
        setSelectedId(rowId);
        const selectedPati = adminNewRowData.find(obj => obj.patientID === rowId);
        setGetRowData(selectedPati);
        setIsUpdate(!isUpdate);
    }
    const  handleExam = (e, id) =>{
      setIsExam(!isExam);
      const selectedExam = adminNewRowData.find( (obj) => obj._id === id );
      setExamData(selectedExam); 
    }
    
    const deleteData = (e, rowId) => {
        alert(`Do you want to permanently delet this item ${rowId}`);
        fetch(`https://hack-diversityapi.onrender.com/exams/${rowId}`, {
            method: "DELETE"
        }) 
          .then(res => res.json())
          .then(res => setStatus(res));
          setGetRowDataId(rowId);
    }

    useEffect(() => {
        if (exams && patients) {
            const mergeData = exams.map(eobj =>
                ({ ...patients.find((pobj) => (pobj._id === eobj.patientID) && pobj), ...eobj }));
            setAdminNewRowData(mergeData);
        }
        if (search) {
            const filteredData = adminNewRowData.filter(obj => obj.keyFindings.match(search),)
            setAdminNewRowData(filteredData);
        }

    }, [exams, search, adminNewRowData, patients]);

    return (
      <>
        <div>
          {!(isUpdate || isDeleted || isExamInf || isExam) && (
            <div>
              <div className="btn_sty">
                <NavLink style={{ color: "white" }} to="/exams/create">
                  <button className="btn btn-primary">Create Exam </button>
                </NavLink>
                <NavLink style={{ color: "white" }} to="/patients/create">
                  <button className="btn btn-primary mx-3">
                    Create Patient{" "}
                  </button>
                </NavLink>
              </div>
              <div>
                <label className="sea-label">Search:</label>
                <input
                  type="text"
                  id="search"
                  name="search"
                  value={search}
                  onChange={handelSearch}
                />
              </div>
              <div>
                <table className="table table_center ">
                  <thead>
                    <tr>
                      {Columns.map((headers, id) => (
                        <th className="trTd" key={id}>
                          {headers.Header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {adminNewRowData?.map((data) => {
                      return (
                        <>
                          <tr key={data._id} className="trTd">
                            <td>{data.patientID}</td>
                            <td>
                              <button
                                style={{ color: "blue" }}
                                type="button"
                                className="btn bg-transparent"
                                onClick={(e) => handleExam(e, data._id)}
                              >
                                {data._id}
                              </button>
                            </td>
                            <td>
                              <img
                                className="image_sty"
                                src={data.image}
                                alt=""
                              />
                            </td>
                            <td className="trTd">{data.keyFindings}</td>
                            <td>
                              {data.brixiaScore.map((data) => `${data},`)}
                            </td>
                            <td>{data.age}</td>
                            <td>{data.sex}</td>
                            <td>{data.bmi}</td>
                            <td>{data.zipCode}</td>
                            <td>
                              <button
                                style={{ color: "blue" }}
                                type="button"
                                className="btn bg-transparent"
                                onClick={(e) => updateData(e, data.patientID)}
                              >
                                Update
                              </button>
                            </td>
                            <td className="trTd">
                              <button
                                style={{ color: "red" }}
                                type="button"
                                className="btn bg-transparent"
                                onClick={(e) => deleteData(e, data._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {isUpdate && <UpdateExam update={getRowData} />}
          {isExam && <Exam examData={examData} />}
        </div>
      </>
    );
}

export default Admin;
