import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ExamDetails = (exam) => {
  // const { id } = useParams();
  // const [exam, setExam] = useState({});

  // useEffect(() => {
  //   fetch(`/api/exams/${id}`)
  //     .then(res => res.json())
  //     .then(data => setExam(data));
  // }, [id]);

    return (
        <div>
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
        </div>
    );
}

export default ExamDetails;
