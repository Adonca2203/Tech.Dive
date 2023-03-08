import React, { useState } from 'react'
import { NavLink} from 'react-router-dom';

const UpdateExam = (props) => {
    const [updatedData, setUpdatedData] = useState(props.update);
    const [patient, setPatient] = useState(
      {patientID:'', age:'', sex: '', bmi: '', zipCode: '', _id: '', image:'', date: '', keyFindings: '', brixiaScore: ''});

    const handleCreate = (e) => {
      const name = e.target.name;
      const value =  e.target.value;
      setPatient({...patient, [name]:value});
      
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newPatient = {...patient,  date: (new Date()).toLocaleDateString().toString() };
        setPatient(newPatient);
      }

  return (
    <>
      <div> 
       <div>
       <h3>Edit Exam </h3>
      </div>
        <div className='container '>
          <form >
              <div >
                <button type='submit' onClick={handleSubmit} className='btn btn-primary  createBtn'> Update Exam</button>{"  "}
                <NavLink to='/exams'>
                  <button className='btn btn-danger'> Cancel</button>       
                </NavLink>   
            </div>
            <div >
              <h5 className='rowIn1'>Pateient info </h5> 
              <h5 className='rowIn1'>Exam info </h5> 
            </div>
            <div className='row g-2'>
              <div className='col-md-5 inputToLeft'> 
                <label htmlFor='patientId'>Patient ID</label>
                <input
                  className='form-control textcent'
                  type='text'
                  id='patientId'
                  name='patientId'
                  value={patient.patientID || updatedData.patientID}
                  onChange={handleCreate}/>
              </div>
              <div className='col-md-5 '> 
                <label htmlFor='examId'>Exam ID</label>
                <input
                className='form-control textcent'
                type='text'
                id='examId'
                name='examId'
                value={patient._id || updatedData._id}
                onChange={handleCreate}/>
              </div>
              </div>
             <div className='row g-2'>
               <div className='col-md-5 inputToLeft'> 
                 <label htmlFor='sex'>Age</label>
                  <input
                  className='form-control textcent'
                  type='text'
                  id='age'
                  name='age'
                  value={patient.age || updatedData.age}
                  onChange={handleCreate}/>
               </div>
             <div className='col-md-5'> 
                    <label htmlFor='examId'>Image URL</label>
                      <input
                      className='form-control'
                      type='text'
                      id='imageUrl'
                      name='ImageUrl'
                      value={patient.image || updatedData.image}
                      onChange={handleCreate}/>
                      <img className="img_sty" src={updatedData.image} alt=""/>
             </div>
             </div>
             <div className='row g-2'>
                 <div className='col-md-5 inputToLeft'> 
                 <label htmlFor='sex'>Sex</label>
                  <input
                  className='form-control textcent'
                  type='text'
                  id='sex'
                  name='sex'
                  value={patient.sex || updatedData.sex}
                  onChange={handleCreate}/>
                </div>
                <div className='col-md-5'> 
                    <label htmlFor='examId'>Date</label>
                      <input
                      className='form-control textcent'
                      type='text'
                      id='date'
                      name='date'
                      value={(new Date ()).toLocaleDateString().toString() || updatedData.date}
                      onChange={handleCreate}/>
                   </div>
              </div>
              <div className='row g-2'>
                 <div className='col-md-5 inputToLeft'> 
                 <label htmlFor='patientId textcent'>BMI</label>
                  <input
                  className='form-control textcent'
                  type='text'
                  id='bni'
                  name='bmi'
                  value={patient.bmi || updatedData.bmi}
                  onChange={handleCreate}/>
                </div>
                <div className='col-md-5'> 
                    <label htmlFor='keyFindings'>Key Findings</label>
                      <textarea
                      className='form-control'
                      type='text'
                      id='keyFindings'
                      name='keyFindings'
                      value={patient.keyFindings || updatedData.keyFindings}
                      onChange={handleCreate}/>
                </div>
              </div>
              <div className='row g-2'>
                <div className='col-md-5 inputToLeft'> 
                 <lable htmlFor='zipCode'>Zip Code</lable>
                  <input
                  className='form-control textcent'
                  type='text'
                  id='zipCode'
                  name='zipCode'
                  value={patient.zipCode || updatedData.zipCode}
                  onChange={handleCreate}/>
                </div>
                <div className='col-md-5 '> 
                 <lable htmlFor='brixiaScore'>Brixia Score</lable>
                  <input
                  className='form-control textcent'
                  type='text'
                  id='brixiaScore'
                  name='brixiaScore'
                  value={patient.brixiaScore || updatedData.brixiaScore}
                  onChange={handleCreate}/>
                </div>
               </div>            
         </form>
         </div>
      
    </div>  
    </>    
  )
}

export default UpdateExam