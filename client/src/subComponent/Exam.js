import React from "react";

const Exam = (props) => {

  return (
    <>
      <div>
        <div id="exam">
          <h3> Patient Info </h3>  
          <h3>Exam Info </h3> 
        </div>
             
        <div className="row" id="rowEx">
          <div className="column">
            <label>Patient ID</label>
            <p>{props.examData.patientID}</p>
            <label htmlFor="sex">Age</label>
            <p>{props.examData.age}</p>
            <label htmlFor="sex">Sex</label>
            <p>{props.examData.sex}</p>
            <label htmlFor="patientId textcent">BMI</label>
            <p>{props.examData.bmi}</p>
            <lable htmlFor="zipCode">Zip Code</lable>
            <p>{props.examData.zipCode}</p>
            <lable htmlFor="brixiaScore">Brixia Score</lable>
            <p>{props.examData.brixiaScore}</p>
          </div>
          <div class="column">
            <label>Exam ID</label>
            <p>{props.examData._id}</p>
            <label htmlFor="examId">Image URL</label>
            <p>{props.examData.image}</p>
            <img className="img_sty" src={props.examData.image} alt="" />
            <div>
              {" "}
              <label htmlFor="examId">Date</label>
            </div>
            <p>{props.examData.date}</p>
            <label htmlFor="keyFindings">Key Findings</label>
            <p>{props.examData.keyFindings}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exam;
