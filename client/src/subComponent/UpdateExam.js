import React, { useState } from 'react'
import { NavLink} from 'react-router-dom';
import {initExam} from '../data/exam';
import {initPatient} from '../data/patient';
const API_ROOT = "https://hack-diversityapi.onrender.com";

const UpdateExam = (props) => {

    const [patient, setPatient] = useState(props.update);
    const [exam, setExam] = useState(initExam);
    const [patData, setPatData] = useState(initPatient);
    
    const handleCreate = (e) => {
      const name = e.target.name;
      let value =  e.target.value;
      if (name === "brixiaScore") {
        value = value.replace(/[^0-9 \,]/, "");
        let valueArr = value.split(",");
        setExam({ ...exam, [name]: valueArr });
        return;
      }
      setPatient({...patient, [name]:value});
      if (
        name === "patientID" ||
        name === "bmi" ||
        name === "image" ||
        name === "keyFindings" 
      ) {
        setExam({
          ...exam,
          patientID: patient.patientID,
          date: new Date().toLocaleDateString(),
          bmi: patient.bmi,
          image: patient.image,
          keyFindings: patient.keyFindings,
        });
      } 
      if(name === 'firstName' || name === 'lastName' || name === "age" || name || "zipCode" || name === "sex" ) {
        setPatData({
          ...patData, 
           firstName: patient.firstName,
           lastName: patient.lastName,
           age: patient.age,
           zipCode: patient.zipCode,
           sex: patient.sex
        })
      }    
    }

    const handleUpdate = (e) => {
          e.preventDefault();
          //let newPatient = {...patient,  date: (new Date()).toLocaleDateString().toString() };
          //setPatient(newPatient);
          alert(`Are you sure you want to update this item? ${patient.patientID} `)
          try{
            fetch(`${API_ROOT}/exams/${patient._id}`, {
              method: "PATCH",
              body: JSON.stringify(exam),
              headers: {
                "Content-Type": "application/json",
              },
            });
          }catch(err){
            alert(err.message);
          }
        try {
          fetch(`${API_ROOT}/patients/${patient.patientID}`, {
            method: "PATCH",
            body: JSON.stringify(patData),
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (err) {
          alert(err.message);
     }

    }

  return (
    <>
      <div>
        <h3>Edit Exam </h3>
        <form className="centerG">
          <div>
            <button
              type="submit"
              onClick={handleUpdate}
              className="btn btn-primary  createBtn"
            >
              {" "}
              Update Exam
            </button>
            {"  "}
            <NavLink to="/exams">
              <button className="btn btn-danger"> Cancel</button>
            </NavLink>
          </div>
          <div className="row">
            <div className="column">
              <div className="rowIn1">
                <h5>Pateient Info </h5>
              </div>
              <label>Patient ID</label>
              <input
                className="form-control textcent"
                type="text"
                id="patientId"
                name="patientID"
                value={patient.patientID}
                disabled
                onChange={handleCreate}
              />
              <label htmlFor="sex">Age</label>
              <input
                className="form-control textcent"
                type="text"
                id="age"
                name="age"
                value={patient.age}
                onChange={handleCreate}
              />
              <label htmlFor="sex">Sex</label>
              <input
                className="form-control textcent"
                type="text"
                id="sex"
                name="sex"
                value={patient.sex}
                onChange={handleCreate}
              />
              <label htmlFor="patientId textcent">BMI</label>
              <input
                className="form-control textcent"
                type="text"
                id="bmi"
                name="bmi"
                value={patient.bmi}
                onChange={handleCreate}
              />
              <lable htmlFor="zipCode">Zip Code</lable>
              <input
                className="form-control textcent"
                type="text"
                id="zipCode"
                name="zipCode"
                value={patient.zipCode}
                onChange={handleCreate}
              />
              <label htmlFor="firstName">First Name</label>
              <input
                className="form-control textcent"
                type="text"
                id="firstName"
                name="firstName"
                value={patient.firstName}
                onChange={handleCreate}
              />
              <lable htmlFor="lastName">Last Name</lable>
              <input
                className="form-control textcent"
                type="text"
                id="lastName"
                name="lastName"
                value={patient.lastName}
                onChange={handleCreate}
              />
              <lable htmlFor="brixiaScore">Brixia Score</lable>
              <input
                className="form-control textcent"
                type="text"
                id="brixiaScore"
                name="brixiaScore"
                value={patient.brixiaScore}
                onChange={handleCreate}
              />
            </div>
            <div class="column">
              <div className="rowIn1">
                <h5>Exam Info </h5>
              </div>
              <label>Exam ID</label>
              <input
                className="form-control textcent"
                type="text"
                id="examId"
                name="_Id"
                value={patient._id}
                disabled
                onChange={handleCreate}
              />
              <label htmlFor="examId">Image URL</label>
              <input
                className="form-control"
                type="text"
                id="image"
                name="image"
                value={patient.image}
                onChange={handleCreate}
              />
              <img className="img_sty" src={patient.image} alt="" />
              <div>
                {" "}
                <label htmlFor="examId">Date</label>
              </div>
              <input
                className="form-control textcent"
                type="text"
                id="date"
                name="date"
                value={new Date().toLocaleDateString()}
                onChange={handleCreate}
              />
              <label htmlFor="keyFindings">Key Findings</label>
              <textarea
                className="form-control"
                type="text"
                id="keyFindings"
                name="keyFindings"
                rows="3"
                value={patient.keyFindings}
                onChange={handleCreate}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateExam
