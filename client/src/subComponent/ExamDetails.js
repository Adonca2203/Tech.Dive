// import { Search } from "../subComponent";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import axios from 'axios'
import { useEffect, useState } from "react";

import { useApi } from '../hooks/use-api';




   
const ExamDetails = (props) => {

  let [exam, setExam] = useState([])
  // const testID = "63ddab3dc9c1d0397e4c7b08";
  const { response } = useApi({ path: `exams/${props.id}`})
  
  const getExam = () => {
    axios
      .get(response)
      .then(
        (res => setExam(res.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error))
  };
  
  // useEffect(() => {
  //   getExam()
  // }, [])
  return (
   
    <>
      
      <Container class="PatientInfo">
        
        <Card class="PatientID" key={exam.id}>
          <Card.Body>
            <Card.Title>Patient ID</Card.Title>
            <Card.Text>{exam.patientId}</Card.Text>
          </Card.Body>
        </Card>

        <Card class="Age">
          <Card.Body>
            <Card.Title>Age</Card.Title>
            <Card.Text>{exam.age}</Card.Text>
          </Card.Body>
        </Card>
        
        <Card class="Sex">
          <Card.Body>
            <Card.Title>Sex</Card.Title>
            <Card.Text>{exam.sex}</Card.Text>
          </Card.Body>
        </Card>
        
        <Card class="BMI">
          <Card.Body>
            <Card.Title>BMI</Card.Title>
            <Card.Text>{exam.bmi}</Card.Text>
          </Card.Body>
        </Card>
        
        <Card class="ZipCode">
          <Card.Body>
            <Card.Title>Zip Code</Card.Title>
            <Card.Text>{exam.zipCode}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      
      <Container class="ExamInfo">
        
        <Card class="ExamID" key={exam.id}>
          <Card.Body>
            <Card.Title>Exam ID</Card.Title>
            <Card.Text>{exam.examId}</Card.Text>
          </Card.Body>
        </Card>

        <Card class="Image">
          <Card.Body>
            <Card.Title>Image URL</Card.Title>
            <Card.Text>URL:</Card.Text>
            {/* Add an image here */}
          </Card.Body>
        </Card>
        <Card class="Date">
          <Card.Body>
            <Card.Title>Date</Card.Title>
            <Card.Text>#</Card.Text>
          </Card.Body>
        </Card>
        <Card class="KeyFindings">
          <Card.Body>
            <Card.Title>Key Findings</Card.Title>
            <Card.Text>{exam.keyFindings}</Card.Text>
          </Card.Body>
        </Card>
        <Card class="BrixiaScore">
          <Card.Body>
            <Card.Title>Brixia Score (seperated by Comma)</Card.Title>
            <Card.Text>{exam.brixiaScore}</Card.Text>
          </Card.Body>
        </Card>
  </Container> 
    </>
  );
};

export default ExamDetails
