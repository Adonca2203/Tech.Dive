import React, { useState, useMemo } from "react";
import { ExamDetails, PatientDetails, Search } from "../subComponent";
import { useApi } from "../hooks/use-api";


const Exams = (props) => {
  const [isPatientInfo, setIsPatientInfo] = useState(false);
  const [isExamInfo, setIsExamInfo] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // Track selected row
  const { response: exams } = useApi({ path: "exams" });
  const { response: patients } = useApi({ path: "patients" });

  // Function to handle row click
  const handleRowClick = (row) => {
    setSelectedRow(row); // Set selected row to the clicked row
    setIsExamInfo(true); // Display ExamDetails component
    console.log(selectedRow);
    // Go to ExamDetails Page
  };

  if (exams) {
    let resp = exams
    let pats = patients
    return (
      <>
        {!(isExamInfo || isPatientInfo) && (
          <div>
            <div>
              <h1> Exam page</h1>
              <Search />
            </div>
            <div>
              <table className="tableH">
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
                <tbody>
                  {resp.map((exam) => (
                    <tr onClick={() => handleRowClick(exam)}>
                      {/* Somehow need to click on this to go to ExamDetails, Maybe using <Link> React component */}
                      <td> {exam["_id"]}</td>
                      <td> {exam["patientID"]}</td>
                      <td>
                        {" "}
                        <img
                          src={exam["image"]}
                          alt="Photo"
                          width="50"
                          height="50"
                        />{" "}
                      </td>
                      <td> {exam["keyFindings"]}</td>
                      <td> {exam["brixiaScore"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {isPatientInfo && <PatientDetails />}
      </>
    );
  }
  return <p>Loading...</p>
};

export default Exams;
