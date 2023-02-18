import { Search } from "../subComponent";
import { Card, Container } from "react-bootstrap";
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
  
  useEffect(() => {
    getExam()
  }, [])
  return (
   
    <>
      <div>
        <h3>Exam Details</h3>
        <Search />
      </div>

      <Container className="PatientInfo">
        <Card className="PatientID" key={exam.id}>
          <Card.Body>
            <Card.Title>Patient ID</Card.Title>
            <Card.Text>{exam.patientId}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="Age">
          <Card.Body>
            <Card.Title>Age</Card.Title>
            <Card.Text>{exam.age}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="Sex">
          <Card.Body>
            <Card.Title>Sex</Card.Title>
            <Card.Text>{exam.sex}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="BMI">
          <Card.Body>
            <Card.Title>BMI</Card.Title>
            <Card.Text>{exam.bmi}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="ZipCode">
          <Card.Body>
            <Card.Title>Zip Code</Card.Title>
            <Card.Text>{exam.zipCode}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container className="ExamInfo">
        <Card className="ExamID">
          <Card.Body>
            <Card.Title>Exam ID</Card.Title>
            <Card.Text>{exam.examId}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="Image">
          <Card.Body>
            <Card.Title>Image URL</Card.Title>
            <Card.Text>URL:</Card.Text>
            <Card.Image>Image:</Card.Image>
          </Card.Body>
        </Card>
        <Card className="Date">
          <Card.Body>
            <Card.Title>Date</Card.Title>
            <Card.Text>#</Card.Text>
          </Card.Body>
        </Card>
        <Card className="KeyFindings">
          <Card.Body>
            <Card.Title>Key Findings</Card.Title>
            <Card.Text>{exam.keyFindings}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="BrixiaScore">
          <Card.Body>
            <Card.Title>Brixia Score (seperated by Comma)</Card.Title>
            <Card.Text>{exam.brixiaScore}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ExamDetails;
