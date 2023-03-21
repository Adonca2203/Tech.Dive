import React from "react";

const Exam = (props) => {

  return (
    <>
      <div className="centerG">
        <div className="row">
          <div className=" col-lg-offset-2 col-lg-3 col-sm-offset-1 col-sm-3 ">
            <div className="card">
              <div className="row">
                <div>
                  <div className="card">
                    <h3 className="card-header"> Patient Info </h3>
                  </div>
                </div>
              </div>
              <label className="card-title">Patient ID</label>
              <p>{props.examData.patientID}</p>
              <label className="card-title" htmlFor="sex">
                {" "}
                Age
              </label>
              <p>{props.examData.age}</p>
              <label className="card-title" htmlFor="sex">
                Sex
              </label>
              <p>{props.examData.sex}</p>
              <label className="card-title" htmlFor="patientId textcent">
                BMI
              </label>
              <p>{props.examData.bmi}</p>
              <lable className="card-title" htmlFor="zipCode">
                {" "}
                Zip Code{" "}
              </lable>
              <p>{props.examData.zipCode}</p>
              <lable className="card-title" htmlFor="brixiaScore">
                {" "}
                Brixia Score
              </lable>
              <p>{props.examData.brixiaScore}</p>
            </div>
          </div>
          <div className="col-lg-5 col-lg-offset-2  col-sm-3 col-sm-offset-1 ">
            <div className="card">
              <div className="row">
                <div>
                  <div className="card">
                    <h3 className="card-header"> Exam Info </h3>
                  </div>
                </div>
              </div>
              <label className="card-title">Exam ID</label>
              <p>{props.examData._id}</p>
              <label className="card-title" htmlFor="examId">
                Image URL{" "}
              </label>
              <p>{props.examData.image}</p>
              <img className="img_sty" src={props.examData.image} alt="" />
              <div>
                <label htmlFor="examId">Date</label>
              </div>
              <p>{props.examData.date}</p>
              <label className="card-title" htmlFor="keyFindings">
                {" "}
                Key Findings{" "}
              </label>
              <p>{props.examData.keyFindings}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exam;
