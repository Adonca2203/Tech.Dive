import React, { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom';
import {useApi, Methods} from '../hooks/use-api';

const CreateExam = (props) => {
   
    const [patient, setPatient] = useState({});
    const [response, setResponse] = useState({});

    const handleCreate = (e) => {
        const name = e.target.name;
        const value =  e.target.value;
        setPatient({...patient, [name]:value});
     
      }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(patient) {
        let patientObj = null;
        let status = 404;

        fetch(`http://localhost:9000/patients/${patient.id}`, {method: 'GET'})
        .then(res => res.json())
        .then(res => status === res.status)
        .then(res => patientObj === res);

      if(status === 404){
       fetch('http://localhost:9000/patients', {
            method: 'POST',
            body: patient
        })
            .then(res => res.json())
            .then(res => setResponse(res));
      }}
      if(response){
        alert(response)
      }
      else alert("There was an error creating the item...:(");
     
    }

    return (
      <>
        <div> 
          <div ><h2 className='btnP'>Create Exam </h2></div> 
            <div>
              <form  className='inputForm'>
                  <div>     
                    <div className='createBtn'>
                      <button type='submit' onClick={handleSubmit} className='btn btn-primary  createBtn'>Add Exam</button>{"  "}
                      <button type='submit' className='btn btn-primary  createBtn'  > Random Exam</button>{"  "}
                      <NavLink to='/exams'>
                        <button   className='btn btn-danger'> Cancel</button> 
                      </NavLink> 
                    </div>              
                  </div>
                  <div>
                      <h4  className='rowIn1'>Pateient info </h4> 
                      <h4  className='rowIn1'>Exam info </h4>      
                  </div>
                  <div className='row g-3 '>
                    <div className='col-md-5 inputToLeft'>          
                      <label htmlFor='patientId '>Patient ID</label>
                        <input
                        className='form-control'
                        type='text'
                        id='patientId'
                        name='patientId'
                        value={patient.patientId}
                        onChange={handleCreate}/>
                      </div>
                      <div className='col-md-5 '> 
                        <label htmlFor='examId'>Exam ID</label>
                          <input
                          className='form-control'
                          type='text'
                          id='examId'
                          name='examId'
                          value={patient.examId}
                          onChange={handleCreate}/>
                      </div>
                  </div>
                  <div className='row g-3'>
                    <div className='col-md-5 inputToLeft'> 
                    <label htmlFor='sex'>Age</label>
                      <input
                      className='form-control'
                      type='text'
                      id='age'
                      name='age'
                      value={patient.age}
                      onChange={handleCreate}/>
                    </div>
                    <div className='col-md-5'> 
                        <label htmlFor='examId'>Image URL</label>
                          <input
                          className='form-control'
                          type='text'
                          id='imageUrl'
                          name='ImageUrl'
                          value={patient.imageUrl}
                          onChange={handleCreate}/>
                      </div>
                  </div>
                  <div className='row g-3'>
                    <div className='col-md-5 inputToLeft'> 
                    <label htmlFor='sex'>Sex</label>
                      <input
                      className='form-control'
                      type='text'
                      id='sex'
                      name='sex'
                      value={patient.sex}
                      onChange={handleCreate}/>
                    </div>
                    <div className='col-md-5'> 
                        <label htmlFor='examId'>Date</label>
                          <input
                          className='form-control'
                          type='text'
                          id='date'
                          name='date'
                          value={ (new Date ()).toLocaleDateString().toString() || patient.date}
                          onChange={handleCreate}/>
                      </div>
                  </div>
                  <div className='row g-3'>
                    <div className='col-md-5 inputToLeft'> 
                    <label htmlFor='patientId'>BMI</label>
                      <input
                      className='form-control'
                      type='text'
                      id='bni'
                      name='bmi'
                      value={patient.bmi}
                      onChange={handleCreate}/>
                    </div>
                    <div className='col-md-5'> 
                        <label htmlFor='keyFindings'>Key Findings</label>
                          <textarea
                          className='form-control'
                          type='text'
                          id='keyFindings'
                          name='keyFindings'
                          value={patient.keyFindings}
                          onChange={handleCreate}/>
                    </div>
                  </div>
                  <div className='row g-3'>
                    <div className='col-md-5 inputToLeft'> 
                    <label htmlFor='zipCode'>Zip Code</label>
                      <input
                      className='form-control'
                      type='text'
                      id='zipCode'
                      name='zipCode'
                      value={patient.zipCode}
                      onChange={handleCreate}/>
                    </div>
                    <div className='col-md-5 '> 
                    <label htmlFor='brixiaScore'>Brixia Score</label>
                      <input
                      className='form-control'
                      type='text'
                      id='brixiaScore'
                      name='brixiaScore'
                      value={patient.brixiaScore}
                      onChange={handleCreate}/>
                    </div>
                </div>        
            </form>
           </div>      
        </div>  
      </>   
    )
  }

export default CreateExam;