import React, { useState } from 'react'
import Admin from '../components/Admin';

const CreateExam = () => {
 const [patient, setPatient] = useState(
     {patientId:'', age:'', sex: '', bmi: '', zipCode: '', examId: '', imageUrl:'', date: '', keyFindings: '', brixiaScore: ''});
 const [cancel, setCancel] = useState(false);

 const handleCreate = (e) => {
  const name = e.target.name;
  const value =  e.target.value;
  setPatient({...patient, [name]:value})

}

  const handleSubmit = (e) => {
    e.preventDefault();
    //let id = patient.patientId.split('-')[3];
    console.log(patient)
    if(patient.patientId && patient.age && patient.sex ){
    let newPatient = {...patient, id:patient.patientId, date: (new Date()).toLocaleDateString().toString() }
      setPatient(newPatient)
      console.log(newPatient)
      alert(`new patient with id COVID-19-${newPatient.patientId} has been created`)
      setPatient({patientId:'', age:'', sex: '', bmi: '', zipCode: '', examId: '', imageUrl:'', date: '', keyFindings: '', brixiaScore: ''});
     
    }
  }
  return (
    <>
     {!cancel ?
      <div> 
       <div>
       <h3>Create Exam </h3>
      </div>
      <div className='createBtn'>
        <button type='submit' onClick={ handleSubmit } className='btn btn-primary  createBtn'> Add Exam</button>{"  "}
        <button type='submit' className='btn btn-primary  createBtn'> Random Exam</button>{"  "}
        <button type='button' onClick={ () => setCancel(!cancel) } className='btn btn-danger'> Cancel</button>
      </div>
      <section className='tableH'>
        <div >
             <h5 className='rowIn' >Pateient info </h5> 
             <h5 className='rowIn'>Exam info </h5> 
        </div>
         <div>
            <form >
              <div className='row g-3'>
                <div className='col-md-5 inputToLeft'> 
                  <label htmlFor='patientId'>Patient ID</label>
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
                 <lable htmlFor='zipCode'>Zip Code</lable>
                  <input
                  className='form-control'
                  type='text'
                  id='zipCode'
                  name='zipCode'
                  value={patient.zipCode}
                  onChange={handleCreate}/>
                </div>
                <div className='col-md-5 inputToLeftF'> 
                 <lable htmlFor='brixiaScore'>Brixia Score</lable>
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
      </section>
      </div>  : <Admin/> }
    </>
    
  )
}

export default CreateExam;