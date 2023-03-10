import React, { useState } from 'react'
import { NavLink} from 'react-router-dom';

const UpdateExam = (props) => {

    const [patient, setPatient] = useState(props.update);
  
    const handleCreate = (e) => {
      const name = e.target.name;
      const value =  e.target.value;
      setPatient({...patient, [name]:value});
       
    }
    const handleUpdate = (e) => {
      e.preventDefault();
      let newPatient = {...patient,  date: (new Date()).toLocaleDateString().toString() };
      setPatient(newPatient);
      alert(`Are you sure you want to update this item? ${patient.patientID} `)
      console.log(patient)
      try{
        fetch("", {
        method: 'POST', 
        body: JSON.stringify(patient)
        })
      }catch(err){
        alert(err.message);
      }
     
    }
 
  return (
    <>
      <div className='centerG'>  
        <h3>Edit Exam </h3>
        <form >
          <div >
                <button type='submit' onClick={handleUpdate} className='btn btn-primary  createBtn'> Update Exam</button>{"  "}
                <NavLink to='/exams'>
                  <button className='btn btn-danger'> Cancel</button>       
                </NavLink>   
          </div>
       <div class="row">
          <div class="column" >
             <div className='rowIn1'> 
                <h5 >Pateient Info </h5>
              </div>
             <label >Patient ID</label>
             <input
                  className='form-control textcent'
                  type='text'
                  id='patientId'
                  name='patientID'
                  value={patient.patientID }
                  onChange={handleCreate}/>
              <label htmlFor='sex'>Age</label>
              <input
                  className='form-control textcent'
                  type='text'
                  id='age'
                  name='age'
                  value={patient.age }
                  onChange={handleCreate}/>
              <label htmlFor='sex'>Sex</label>
              <input
                  className='form-control textcent'
                  type='text'
                  id='sex'
                  name='sex'
                  value={patient.sex }
                  onChange={handleCreate}/>
              <label htmlFor='patientId textcent'>BMI</label>
              <input
                  className='form-control textcent'
                  type='text'
                  id='bni'
                  name='bmi'
                  value={patient.bmi }
                  onChange={handleCreate}/>
              <lable htmlFor='zipCode'>Zip Code</lable>
              <input
                  className='form-control textcent'
                  type='text'
                  id='zipCode'
                  name='zipCode'
                  value={patient.zipCode }
                  onChange={handleCreate}/>
          </div>
          <div class="column" >
             <div  className='rowIn1'>
               <h5 >Exam Info </h5> 
             </div>
             <label >Exam ID</label>
                <input
                className='form-control textcent'
                type='text'
                id='examId'
                name='_Id'
                value={patient._id }
                onChange={handleCreate}/>
              <label htmlFor='examId'>Image URL</label>
              <input
                  className='form-control'
                  type='text'
                  id='image'
                  name='image'
                  value={patient.image }
                  onChange={handleCreate}/>
               <img className="img_sty" src={patient.image} alt=""/>
               <div> <label htmlFor='examId'>Date</label></div>
               <input
                   className='form-control textcent'
                   type='text'
                   id='date'
                   name='date'
                   value={(new Date ()).toLocaleDateString().toString() }
                   onChange={handleCreate}/>
                <label htmlFor='keyFindings'>Key Findings</label>
                <textarea
                   className='form-control'
                   type='text'
                   id='keyFindings'
                   name='keyFindings'
                   value={patient.keyFindings}
                   onChange={handleCreate}/>
                <lable htmlFor='brixiaScore'>Brixia Score</lable>
                <input
                  className='form-control textcent'
                  type='text'
                  id='brixiaScore'
                  name='brixiaScore'
                  value={patient.brixiaScore }
                  onChange={handleCreate}/>      
            </div>
          </div>
        </form>    
      </div>  
    </>    
  )
}

export default UpdateExam