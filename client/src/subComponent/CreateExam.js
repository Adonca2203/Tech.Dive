import React, { useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useApi } from '../hooks/use-api.js';
import {initExam} from '../data/exam';
const API_ROOT = 'https://hack-diversityapi.onrender.com';

const SearchItem = (props) => {
    const { items, addPatient } = props;
    const [active, setActive] = useState();
    const handlePatientClick = (item) => {
        setActive(item._id);
        addPatient(item);
    };
    return (
        <>
            {
                items.map((item) => (
                    <li key={item._id} onClick={e => handlePatientClick(item)} className={item._id === active ? "list-group-item bg-info text-black" : "list-group-item text-black"}>
                        {item.firstName} {item.lastName} {item.age} {item.zipCode}
                    </li>
                ))
            }
        </>
    );
};

const CreateExam = (props) => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const [created, setCreated] = useState();
    const performingCall = useRef(false);

    const { response: patients } = useApi({ path: "patients" });
    // const initExam = {
    //     patientID: "",
    //     image: "https://via.placeholder.com/150",
    //     keyFindings: "",
    //     brixiaScore: "",
    //     bmi: 0.00,
    //     date: Date.now()
    // }
    const [exam, setExam] = useState(initExam);

    const handleUpdate = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "brixiaScore") {
            value = value.replace(/[^0-9 \,]/, '');
            let valueArr = value.split(",");
            setExam({ ...exam, [name]: valueArr });
            return;
        }
        setExam({ ...exam, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (created || performingCall.current) return;
        var form = document.getElementsByTagName("form")[0];
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        fetch(`${API_ROOT}/exams`, {
            method: "POST",
            body: JSON.stringify(exam),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setCreated(res));
        performingCall = true;
    };

    const updatePatientList = (e) => {
        let pats = patients.filter(p => p.firstName.toLowerCase().concat(` ${p.lastName.toLowerCase()}`).includes(e.target.value.toLowerCase()));
        setItems(pats.slice(0, 3));
        setQuery(e.target.value);
    };

    const addPatient = (item) => {
        setExam({ ...exam, ["patientID"]: item._id });
        let q = `${item.firstName} ${item.lastName}`;
        setQuery(q);
    };
   
    if (!patients) return <p>Loading...</p>

    if (created) {
        if (created.error) {
            return (
                <>
                    {Object.keys(created.error).map((key, i) => (
                        <h2 key={i}>{created.error[key]}</h2>
                    ))}
                    <NavLink style={{ color: 'white' }} to='/admin'>
                        <button className='btn btn-primary mx-2'>Back to Admin</button>
                    </NavLink>
                    <NavLink style={{ color: 'white' }} to='/exams/create'>
                        <button className='btn btn-primary mx-2'>Create New Exam</button>
                    </NavLink>
                </>
            );
        }
        return (
            <>
                <h1>{created.message}</h1>
                <NavLink style={{ color: 'white' }} to='/admin'>
                    <button className='btn btn-primary mx-2'>Back to Admin</button>
                </NavLink>
                <NavLink style={{ color: 'white' }} to='/exams/create'>
                    <button className='btn btn-primary mx-2'>Create New Exam</button>
                </NavLink>
            </>
        );
    }
    
    return (
      <>
        <div>
          <div>
            <h2 className="btnP">Create Exam </h2>
          </div>
          <div>
            <form className="inputForm">
              <div>
                <div className="createBtn">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-primary createBtn"
                  >
                    Add Exam
                  </button>
                  {"  "}
                  <NavLink to="/exams">
                    <button className="btn btn-danger">Cancel</button>
                  </NavLink>
                </div>
              </div>
              <div>
                <h4>Exam info</h4>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <div className="col-md-5 inputToLeft">
                  <label htmlFor="patientId">
                    <input
                      className="form-control text-center"
                      type="search"
                      placeholder="Patient Name..."
                      id="patientId"
                      name="patientId"
                      value={query}
                      required
                      onChange={updatePatientList}
                    />
                    <span className="sr-only">Search patient</span>
                  </label>
                  <ul className="list-group">
                    <SearchItem items={items} addPatient={addPatient} />
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <div className="col-md-5 inputToLeft">
                  <label htmlFor="image">Image</label>
                  <input
                    className="form-control text-center"
                    type="text"
                    id="image"
                    name="image"
                    required
                    value={exam.image}
                    onChange={handleUpdate}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <div className="col-md-5 inputToLeft">
                  <label htmlFor="bmi">BMI</label>
                  <input
                    className="form-control text-center"
                    type="number"
                    step="0.01"
                    id="bmi"
                    name="bmi"
                    required
                    value={exam.bmi}
                    onChange={handleUpdate}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <div className="col-md-5 inputToLeft">
                  <label htmlFor="keyFindings">Key Findings</label>
                  <textarea
                    className="form-control text-center"
                    type="text"
                    id="keyFindings"
                    name="keyFindings"
                    value={exam.keyFindings}
                    required
                    onChange={handleUpdate}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <div className="col-md-5 inputToLeft">
                  <label htmlFor="keyFindings">Brixia Score</label>
                  <input
                    className="form-control text-center"
                    type="text"
                    id="brixiaScore"
                    name="brixiaScore"
                    value={exam.brixiaScore}
                    onChange={handleUpdate}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <div className="col-md-5 inputToLeft">
                  <label htmlFor="age">Date</label>
                  <input
                    className="form-control text-center"
                    type="text"
                    id="date"
                    name="date"
                    value={
                      new Date().toLocaleDateString().toString() || exam.date
                    }
                    onChange={handleUpdate}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default CreateExam;
