// import { Search } from "../subComponent";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useApi, Methods } from '../hooks/use-api';

// function getExam() {
//   // const examAPI = useApi({ path: `exams/details/${props.examId}`})

const ExamDetails = (props) => {
const examAPI = 'http://localhost:9000/exams'
const patientAPI = 'http://localhost:9000/patients'

const [exam, setExam] =useState([])
const [patient, setPatient] =useState([])

 const GetExam = () => {
  axios.get(examAPI)
  .then(response => setExam(response.data), (err) => console.error(err))
  .catch((error) => console.error(error))
 }
 const GetPatient = () => {
  axios.get(patientAPI)
  .then(response => setPatient(response.data), (err) => console.error(err))
  .catch((error) => console.error(error))
 };


 useEffect(()=> {GetExam()}, ([]))
 useEffect(()=> {GetPatient()}, ([]))
  return (
      
    <>
      
      <Container  class="patientInfo">
        
        <Card class="PatientID" key={exam.id}>
          <Card.Body>
            <Card.Title>Patient ID</Card.Title>
            <Card.Text>{props.patientID}</Card.Text>
          </Card.Body>
        </Card>

        <Card class="Age">
          <Card.Body>
            <Card.Title>Age</Card.Title>
            <Card.Text>{props.age}</Card.Text>
          </Card.Body>
        </Card>
        
        <Card class="Sex">
          <Card.Body>
            <Card.Title>Sex</Card.Title>
            <Card.Text>{props.sex}</Card.Text>
          </Card.Body>
        </Card>
        
        <Card class="BMI">
          <Card.Body>
            <Card.Title>BMI</Card.Title>
            <Card.Text>{props.bmi}</Card.Text>
          </Card.Body>
        </Card>
        
        <Card class="ZipCode">
          <Card.Body>
            <Card.Title>Zip Code</Card.Title>
            <Card.Text>{props.zipCode}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      
      <Container class="examInfo">
        
        <Card class="ExamID" key={exam.id}>
          <Card.Body>
            <Card.Title>Exam ID</Card.Title>
            <Card.Text>{props._id}</Card.Text>
          </Card.Body>
        </Card>

        <Card class="Image">
          <Card.Body>
            <Card.Title>Image URL</Card.Title>
            <Card.Text>URL:</Card.Text>
            Add an image here
          </Card.Body>
        </Card>
        <Card class="Date">
          <Card.Body>
            <Card.Title>Date</Card.Title>
            <Card.Text>{props.date}</Card.Text>
          </Card.Body>
        </Card>
        <Card class="KeyFindings">
          <Card.Body>
            <Card.Title>Key Findings</Card.Title>
            <Card.Text>{props.keyFindings}</Card.Text>
          </Card.Body>
        </Card>
        <Card class="BrixiaScore">
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
