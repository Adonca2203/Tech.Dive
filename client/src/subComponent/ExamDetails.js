import React, { useState, useEffect } from "react";
import { useApi } from "../hooks/use-api";


const ExamDetails = ({ exam }) => {
  const tableStyle = {
    fontSize: "24px",
    textAlign: "left",
    width: "100%",
  };

  const thStyle = {
    padding: "12px",
    borderBottom: "2px solid #ddd",
    verticalAlign: "top",
  };

  const tdStyle = {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    verticalAlign: "top",
  };

  const imgStyle = {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
  };

  const PatientData = (props) => {
    const [patient, setPatient] = useState([])
    const { response: patients } = useApi({ path: "patients" });
    let pats =  patients
  
  
    useEffect(() => {
      fetch("https://hack-diversityapi.onrender.com/patients")
      .then((response) => response.json())
      .then ((data) => {
        setPatient(data)
      })
    },[]);

//  if (patient.id === exam.patientID) {
    return(
      <div>
        {patient.map((patient) => {
          return (
            <table style={tableStyle} key={patient.id}>
              <tbody>
              <tr>
                <th style={thStyle}>Age:</th>
                <td style={tdStyle}>{pats.find((patient)=>patients._id === exam.patientID).age}</td>
              </tr>
              <tr>
                <th style={thStyle}>Sex:</th>
                <td style={tdStyle}>{patient.sex}</td>
              </tr>
              <tr>
                <th style={thStyle}>Zip Code</th>
                <td style={tdStyle}>{patient.zipCode}</td>
              </tr>
              </tbody>
  
            </table>
          )
        }
        )}
      </div>
    )
  }
// }

  return (
    <div>
      <h1 style={{ fontSize: "36px" }}>Exam Details</h1>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <th style={thStyle}>Exam ID:</th>
            <td style={tdStyle}>{exam._id}</td>
          </tr>
          <tr>
            <th style={thStyle}>Patient ID:</th>
            <td style={tdStyle}>{exam.patientID}</td>
          </tr>
          <tr>
            <th style={thStyle}>Image:</th>
            <td style={tdStyle}>
              <img src={exam.image} alt="Photo" style={imgStyle} />
            </td>
          </tr>
          <tr>
            <th style={thStyle}>Key Findings:</th>
            <td style={tdStyle}>{exam.keyFindings}</td>
          </tr>
          <tr>
            <th style={thStyle}>Brixia Score:</th>
            <td style={tdStyle}>{exam.brixiaScore}</td>
          </tr>
          <tr>
            <th style={thStyle}>Age:</th>
            <td style={tdStyle}>{exam.age}</td>
          </tr>
          <tr>
            <th style={thStyle}>Sex:</th>
            <td style={tdStyle}>{exam.sex}</td>
          </tr>
          <tr>
            <th style={thStyle}>BMI:</th>
            <td style={tdStyle}>{exam.bmi}</td>
          </tr>
          <tr>
            <th style={thStyle}>Zip Code:</th>
            <td style={tdStyle}>{exam.zipCode}</td>
          </tr>
          <PatientData />
        </tbody>
        
      </table>

    </div>
  );
};

export default ExamDetails;
