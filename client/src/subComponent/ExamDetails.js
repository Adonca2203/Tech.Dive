// import { Search } from "../subComponent";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useApi, Methods } from '../hooks/use-api';

// function getExam() {
//   // const examAPI = useApi({ path: `exams/details/${props.examId}`})

const ExamDetails = (props) => {
// const examAPI = 'http://localhost:9000/exams'
// const patientAPI = 'http://localhost:9000/patients'

//this needs a value to compare to
// const props.id = 

const [exam, setExam] = useState([])
const [patient, setPatient] = useState([])

const { response: exams } = useApi({ path: `exams` });
const { response: patients } = useApi({ path: `patients` });

const getExam = () => {
  exams.map((e)=> (
    if ({exam['_id']} = props.id){
      setExam(e)
    }
  ))
}


//  const GetExam = () => {
//   axios.get(exams)
//   .then(response => setExam(response.data), (err) => console.error(err))
//   .catch((error) => console.error(error))
//  }
//  const GetPatient = () => {
//   axios.get(patients)
//   .then(response => setPatient(response.data), (err) => console.error(err))
//   .catch((error) => console.error(error))
//  };


 useEffect(()=> {GetExam()}, ([]))
 useEffect(()=> {GetPatient()}, ([]))
  return (
      
    <>
      
      <Container className="patientInfo">
        
        <Card className="PatientID" >
          <Card.Body>
            <Card.Title>Patient ID</Card.Title>
            <Card.Text>{exam["_id"]}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="Age">
          <Card.Body>
            <Card.Title>Age</Card.Title>
            <Card.Text>{props.age}</Card.Text>
          </Card.Body>
        </Card>
        
        <Card className="Sex">
          <Card.Body>
            <Card.Title>Sex</Card.Title>
            <Card.Text>{props.sex}</Card.Text>
          </Card.Body>
        </Card>
        
        <Card className="BMI">
          <Card.Body>
            <Card.Title>BMI</Card.Title>
            <Card.Text>{props.bmi}</Card.Text>
          </Card.Body>
        </Card>
        
        <Card className="ZipCode">
          <Card.Body>
            <Card.Title>Zip Code</Card.Title>
            <Card.Text>{props.zipCode}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      
      <Container className="examInfo">
        
        <Card className="ExamID">
          <Card.Body>
            <Card.Title>Exam ID</Card.Title>
            <Card.Text>{props._id}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="Image">
          <Card.Body>
            <Card.Title>Image URL</Card.Title>
            <Card.Text>URL:</Card.Text>
            Add an image here
          </Card.Body>
        </Card>
        <Card className="Date">
          <Card.Body>
            <Card.Title>Date</Card.Title>
            <Card.Text>{props.date}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="KeyFindings">
          <Card.Body>
            <Card.Title>Key Findings</Card.Title>
            <Card.Text>{props.keyFindings}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="BrixiaScore">
          <Card.Body>
            <Card.Title>Brixia Score (seperated by Comma)</Card.Title>
            <Card.Text>{props.brixiaScore}</Card.Text>
          </Card.Body>
        </Card>
  </Container> 
    </>
  );
};

export default ExamDetails
