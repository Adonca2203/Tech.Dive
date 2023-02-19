import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import { ExamDetails, PatientDetails, Search } from '../subComponent';
import { Columns } from '../data/columns';
import fakeData from '../data/data.json';

const Exams = () => {
    const [isPatientInfo, setIsPatientInfo] = useState(false);
    const [isExamInfo, setIsExamInfo] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null); // Track selected row
    const columns = useMemo(() => Columns, []);
    const data = useMemo(() => fakeData, []);

    const dataTable = useTable({ columns, data });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = dataTable;

    // Function to handle row click
    const handleRowClick = (row) => {
        setSelectedRow(row); // Set selected row to the clicked row
        setIsExamInfo(true); // Display ExamDetails component
    };

    return (
        <>
            {!(isExamInfo || isPatientInfo) && (
                <div>
                    <div>
                        <h1> Exam page</h1>
                        <Search />
                    </div>
                    <div>
                        <table {...getTableProps()} className='tableH'>
                            <thead>
                                {headerGroups.map((hg) => (
                                    <tr {...hg.getHeaderGroupProps()}>
                                        {hg.headers.map((column) => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()} onClick={() => handleRowClick(row)}>
                                            {row.cells.map((cell, id) => {
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                        {cell.column.id === "image" ? (
                                                            <img src={cell.value} alt="Photo" width="50" height="50" />
                                                        ) : (
                                                            cell.render('Cell')
                                                        )}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {isExamInfo && selectedRow && (
                <div>
                    <button onClick={() => setIsExamInfo(false)}>Back</button>
                    <div>
                        <h2>Patient ID: {selectedRow.original.patient_id}</h2>
                        <h2>Exam ID: {selectedRow.original.exam_id}</h2>
                        <img src={selectedRow.original.image} alt="Photo" width="50" height="50" />
                        <h2>Key Findings: {selectedRow.original.key_findings}</h2>
                        <h2>Brixia Score: {selectedRow.original.brixia_score}</h2>
                        <h2>Age: {selectedRow.original.age}</h2>
                        <h2>Sex: {selectedRow.original.sex}</h2>
                        <h2>BMI: {selectedRow.original.bmi}</h2>
                        <h2>Zip Code: {selectedRow.original.zip_code}</h2>
                    </div>
                </div>
            )}
            {isPatientInfo && <PatientDetails />}
        </>
    );
}

export default Exams;
