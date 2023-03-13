import React, { useState, useMemo } from "react";
import { ExamDetails, PatientDetails, Search } from "../subComponent";
import { useApi } from "../hooks/use-api";

const Exams = (props) => {
    const [selectedExam, setSelectedExam] = useState(null);
  const [isPatientInfo, setIsPatientInfo] = useState(false);
  const [isExamInfo, setIsExamInfo] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // Track selected row
  const [selectedPatient, setSelectedPatient] = useState(null);
  const { response: exams } = useApi({ path: "exams" });
  const { response: patients } = useApi({ path: "patients" });


  // Function to handle row click
  const handleRowClick = (row) => {
    setSelectedRow(row); // Set selected row to the clicked row
    setIsExamInfo(true); // Display ExamDetails component
  };
  const handlePatientClick = (id) => {
    setSelectedPatient(id); // Set selected row to the clicked row
    setIsPatientInfo(true); // Display ExamDetails component
  };

  // Function to handle back button click
  const handleBackClick = () => {
    setIsExamInfo(false); // Hide ExamDetails component
    setIsPatientInfo(false);
  };

  if (exams && patients) {
    let resp = exams;
    let pats = patients;

    // Table header
    const tableHeader = (
      <thead>
        <tr>
          <th>Exam ID</th>
          <th>Patient ID</th>
          <th>Image</th>
          <th>Key Findings</th>
          <th>Brixia Score</th>
          <th>Age</th>
          <th>Sex</th>
          <th>BMI</th>
          <th>Zip Code</th>
        </tr>
      </thead>
    );

    // Table body
    const tableBody = (
      <tbody>
        {resp.map((exam) => (
          <tr key={exam._id}>
            {/* Clicking on this row displays ExamDetails component */}
            <td className="clickable" onClick={() => handleRowClick(exam)}>
              {exam._id}
            </td>
            <td
              className="clickable"
              onClick={() => handlePatientClick(exam.patientID)}
            >
              {exam.patientID}
            </td>
            <td>
              <img src={exam.image} alt="Photo" width="50" height="50" />
            </td>
            <td>{exam.keyFindings}</td>
            <td>{exam.brixiaScore}</td>
            <td>{pats.find((p) => p._id === exam.patientID).age}</td>
            <td>{pats.find((p) => p._id === exam.patientID).sex}</td>
            <td>{exam.bmi}</td>
            <td>{pats.find((p) => p._id === exam.patientID).zipCode}</td>
          </tr>
        ))}
      </tbody>
    );

    return (
      <>
        {!(isExamInfo || isPatientInfo) && (
          <div>
            <div>
              <h1>Exam page</h1>
              <Search />
            </div>
            <div>
              <table className="tableH" role="table">
                {tableHeader}
                {tableBody}
              </table>
            </div>
          </div>
        )}
        {isExamInfo && (
          <div>
            <button onClick={handleBackClick}>Back</button>
            <ExamDetails exam={selectedRow} />
          </div>
        )}
        {isPatientInfo && (
          <div>
            {" "}
            <button onClick={handleBackClick}>Back</button>
            <PatientDetails id={selectedPatient} patients={patients} />
          </div>
        )}
      </>
    );
  }

  return <p>Loading...</p>;
};

export default Exams;
