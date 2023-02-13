// import { React, useMemo } from 'react'
// import { useTable } from 'react-table'
// import { Columns } from '../data/columns'
// import examData from '../data/data.json'
// import { Search } from '../subComponent';

import { useApi } from '../hooks/use-api';

const ExamDetails = (props) => {

// const columns = useMemo(() => Columns, [])
// const ExamData = useMemo(() => examData, [])

// const tableInstance = useTable({})
//   const {
//    getTableProps,
//    getTableBodyProps,
//    headerGroups,
//    rows,
//    prepareRow,
//   } = tableInstance    
 

const testID = "63ddab3dc9c1d0397e4c7b08";
const { response } = useApi({ path: `exams/${props.id}` }); 

if (response) {
  return(
    // table
    <tr>
      
    </tr>
  );
}

return (
    <>
   
    </>
  );
}


  
  export default ExamDetails;
  