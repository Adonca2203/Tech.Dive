import React, {useState} from "react";
import Exams from "../components/Exams";
import { useApi } from "../hooks/use-api";


const PatientDetails = ({ id }) => {
const [patient, setPatient] = useState([])
const { response: patients } = useApi({ path: "patients" });

let pats =  patients
console.log(pats)

const tableStyle = {
  fontSize: "24px",
  textAlign: "left",
  width: "100%",
};

const thStyle = {
  padding: "12px",
  borderBottom: "2px solid #ddd",
  verticalAlign: "top",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
  verticalAlign: "top",
};

const imgStyle = {
  width: "100%",
  maxWidth: "400px",
  height: "auto",
};

  return (
    <div>
    <h1 style={{ fontSize: "36px" }}>Patient Details</h1>
    <table style={tableStyle}>
      <tbody>
        <tr>
          <th style={thStyle}>Age:</th>
          <td style={tdStyle}>{}</td>
        </tr>
        <tr>
          <th style={thStyle}>Sex:</th>
          <td style={tdStyle}>{}</td>
        </tr>
        <tr>
          <th style={thStyle}>Zip Code:</th>
          <td style={tdStyle}>{}</td>
        </tr>
      
      </tbody>
      
    </table>

  </div>
  );
};

export default PatientDetails;


