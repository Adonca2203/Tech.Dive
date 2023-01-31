import React, { useState } from 'react'
import CreateExam from '../subComponent/CreateExam';
import ExamDetails from '../subComponent/ExamDetails';
import UpdateExam from '../subComponent/PatientDetails';
import Search from '../subComponent/Search';

const Admin = () => {
  const [isCreatExam, setCreatExam] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const[isDeleted, setIsDeleted] = useState(false);
  const[isExamInf, setIsExamInf] = useState(false);
  return (
    <> 
    { !(isCreatExam || isUpdate || isDeleted || isExamInf) &&
      <div >
        <div className='btn_sty'>
            <button  className='btn btn-primary' onClick={() => setCreatExam(!isCreatExam)} >Create Exam</button>
        </div>
        <Search/> 
        <table>
                <thead>
                <tr>
                    <th> Patient ID</th>
                    <th>Exam ID</th>   
                    <th> Image</th>
                    <th>Key Findings</th> 
                     <th> Brixia Score</th>
                    <th>Age</th>   
                    <th> Sex</th>
                    <th>Bmi</th>
                    <th>Zip Code</th>   
                    <th>Update</th>    
                    <th>Delete</th>   
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>
                        <button 
                        className='btn bg-transparent'
                       >Patient Id</button>
                    </th>
                    <th>
                        <button 
                        style={{color: 'blue'}} className='btn bg-transparent'
                        onClick={() => setIsExamInf(!isExamInf)}>Exam Id</button>
                    </th>
                    <th>
                        <button 
                     className='btn bg-transparent'
                       >Patient Id</button>
                    </th>
                    <th>
                        <button 
                         className='btn bg-transparent'
                        >Exam Id</button>
                    </th>
                    <th>
                        <button 
                        className='btn bg-transparent'
                        >Patient Id</button>
                    </th>
                    <th>
                        <button 
                         className='btn bg-transparent'
                        >Exam Id</button>
                    </th>
                    <th>
                        <button 
                        className='btn bg-transparent'
                        >Patient Id</button>
                    </th>
                    <th>
                        <button 
                       className='btn bg-transparent'
                        >Exam Id</button>
                    </th>
                     <th>
                        <button 
                        className='btn bg-transparent'
                        >Exam Id</button>
                    </th>
                    <th>
                        <button 
                        style={{color: 'blue'}} className='btn bg-transparent'
                        onClick={() => setIsUpdate(!isUpdate)}>Update</button>
                    </th>
                    <th>
                        <button 
                        style={{color: 'red'}} className='btn bg-transparent'
                        onClick={() => setIsDeleted(!isDeleted)}>Delete</button>
                    </th>
                </tr>
                </tbody>
                </table> 
    </div> }
    { isCreatExam && <CreateExam/> }
    {isDeleted &&  alert('recoed deleted')}
    {isUpdate && <UpdateExam/>}
    {isExamInf && <ExamDetails/>}
           
   </>
  )
}

export default Admin;