//NOTES - persistent error ERROR in ./src/data/index.js 5:0-29

// export 'default' (reexported as 'Columns') was not found in './columns' (possible exports: Columns)

//I'm commenting out the table I'm trying to use in order to get a dummy table on the screen


// import { React, useMemo } from 'react'
// import { useTable } from 'react-table'
// import { Columns } from '../data/columns'
// import examData from '../data/data.json'
// import { Search } from '../subComponent';

const ExamDetails = () => {
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
  
  return (
    <>
      <div>
        <h3>Exam Details</h3>
        {/* <Search /> */}
        </div>

      <container>
        {/* <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
              </tr>
            ))}
          </thead> */}
          <table>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Exam ID</th>
                <th>Image</th>
                <th>Key Findings</th>
                <th>Brixia Score</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Zip Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>New York</td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>25</td>
                <td>London</td>
              </tr>
            </tbody>
          </table>
      </container>
    </>
  );
}


  
  export default ExamDetails;
  