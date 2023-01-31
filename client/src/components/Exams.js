import React, {useState, useMemo } from 'react';

import {useTable} from 'react-table';

import ExamDetails from '../subComponent/ExamDetails';
import PatientDetails from '../subComponent/PatientDetails';
import Search from '../subComponent/Search';

const Exams = () => {
    const [isPatientInfo, setIsPatientInfo] = useState(false);
    const[isExamInfo, setIsExamInfo] = useState(false);
    // const columns = useMemo(() => Columns, []);
    // const data = useMemo(( )=> examData, [] );
  
//    const dataTable = useTable({columns, data});
//    const {
//        getTableProps,
//        getTableBodyProps,
//        headeerGroups,
//        rows,
//        prepareRow,
//    } = dataTable;

  return (
    <>
     { !(isExamInfo || isPatientInfo)  &&
        <div>   
            <div>
                Exam page
                <Search/>
            </div>
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
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>
                        <button 
                        style={{color: 'blue'}} className='btn bg-transparent'
                        onClick={() => setIsPatientInfo(!isPatientInfo)}>Patient Id</button>
                    </th>
                    <th>
                        <button 
                        style={{color: 'blue'}} className='btn bg-transparent'
                        onClick={() => setIsExamInfo(!isExamInfo)}>Exam Id</button>
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
                </tr>
                </tbody>
                </table> 
            </div>  }
            {isExamInfo && <ExamDetails/>}
            {isPatientInfo && <PatientDetails/>}
           
            
      
       
    </>
  );
}

export default Exams