// import { Search } from "../subComponent";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useApi, Methods } from '../hooks/use-api';

// function getExam() {

const GetExam = (props) => {
  if (props.response){
    let response =  props.response;
    return(
      <>
      {response.render( details => (
        <div key={details["_id"]}>
<p>{details}</p>
                            <p>{details["keyFindings"]}</p>
                            <p>{details["brixiaScore"]}</p>
        </div>
      ))}
     
      
      </>
    )
  }
 }

const ExamDetails = () => {

const { details } = useApi({ path: `exams/details/`}, {method: Methods.GET})



//  useEffect(()=> {GetExam()}, ([]))
//  useEffect(()=> {GetPatient()}, ([]))
  return (
      
    <>
     
      <GetExam details={details} />
    </>
  );
};

export default ExamDetails
