import React from "react";
import { useApi } from "../hooks/use-api";


const PatientDetails = ({id, patients }) => {
  const patient = patients.find((p) => p._id === id);

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
          <th style={thStyle}>Patient ID</th>
          <td style={tdStyle}>{id}</td>
        </tr>
        <tr>
          <th style={thStyle}>Age:</th>
          <td style={tdStyle}>{patient.age}</td>
        </tr>
        <tr>
          <th style={thStyle}>Sex:</th>
          <td style={tdStyle}>{patient.sex}</td>
        </tr>
        <tr>
          <th style={thStyle}>Zip Code:</th>
          <td style={tdStyle}>{patient.zipCode}</td>
        </tr>
      
      </tbody>
      
    </table>

  </div>
  );
};

export default PatientDetails;


