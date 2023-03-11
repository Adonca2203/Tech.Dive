import React, {useState} from 'react';
import PatientDetails from '../subComponent/PatientDetails';
import {Methods, useApi } from '../hooks/use-api';

const ExamDetails = (exam) => {
  const [isPatientInfo, setIsPatientInfo] = useState(false);
  const[isExamInfo, setIsExamInfo] = useState(false);
  const { response } = useApi({ path: 'exams'  }, { method: Methods.GET });
  
    return (
        <>
     { !(isExamInfo || isPatientInfo)  &&
        <div>   
        {response && <p>{response.message}</p>}
        <h3>Exam Details</h3>
          <p>Patient ID: {exam.patientId}</p>
          <p>Exam ID: {exam.examId}</p>
          <p>Key findings: {exam.keyFindings}</p>
          <p>Brixia score: {exam.brixiaScore}</p>
          <p>Age: {exam.age}</p>
          <p>Sex: {exam.sex}</p>
          <p>BMI: {exam.bmi}</p>
          <p>Zip code: {exam.zipCode}</p>
          <img src={exam.imageUrl} alt="Patient's Chest X-Ray" />  
        </div>  }
            {isExamInfo && <ExamDetails/>}
            {isPatientInfo && <PatientDetails/>}     
    </>
    
    );
}

export default ExamDetails;