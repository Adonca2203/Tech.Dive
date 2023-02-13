// import { React, useMemo } from 'react'
// import { useTable } from 'react-table'
// import { Columns } from '../data/columns'
// import examData from '../data/data.json'
import { Search } from "../subComponent";
import { Card, Container } from "react-bootstrap";

const ExamDetails = () => {
  return (
    <>
      <div>
        <h3>Exam Details</h3>
        <Search />
      </div>

      <Container className="PatientInfo">
        <Card className="PatientID">
          <Card.Body>
            <Card.Title>Patient ID</Card.Title>
            <Card.Text>#</Card.Text>
          </Card.Body>
        </Card>
        <Card className="Age">
          <Card.Body>
            <Card.Title>Age</Card.Title>
            <Card.Text># </Card.Text>
          </Card.Body>
        </Card>
        <Card className="Sex">
          <Card.Body>
            <Card.Title>Sex</Card.Title>
            <Card.Text>#</Card.Text>
          </Card.Body>
        </Card>
        <Card className="BMI">
          <Card.Body>
            <Card.Title>BMI</Card.Title>
            <Card.Text>#</Card.Text>
          </Card.Body>
        </Card>
        <Card className="ZipCode">
          <Card.Body>
            <Card.Title>Zip Code</Card.Title>
            <Card.Text>#</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container className="ExamInfo">
        <Card className="ExamID">
          <Card.Body>
            <Card.Title>Exam ID</Card.Title>
            <Card.Text>#</Card.Text>
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
            <Card.Text>#</Card.Text>
          </Card.Body>
        </Card>
        <Card className="BrixiaScore">
          <Card.Body>
            <Card.Title>Brixia Score (seperated by Comma)</Card.Title>
            <Card.Text>#</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ExamDetails;
