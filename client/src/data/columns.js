import React from 'react';
import { Link } from 'react-router-dom';

export const Columns = [
    {
        Header: 'Patient ID',
        accessor: 'patientId'

    },
    {
        Header: 'Exam ID',
        accessor: 'examId',
        Cell: ({ value }) => { 
            return <Link to={`/exam-details/${value}`}>{value}</Link>;
          },
       

    },
    {
        Header: 'Image',
        accessor: 'image'

    },
    {
        Header: 'Key Findings',
        accessor: 'keyFindings'

    },
    {
        Header: 'Brixia Score',
        accessor: 'brixiaScore'

    },
    {
        Header: 'Age',
        accessor: 'age'

    },
    {
        Header: 'Sex',
        accessor: 'sex'

    },
    {
        Header: 'BMI',
        accessor: 'bmi'

    },
    {
        Header: 'Zip Code',
        accessor: 'zipCode'

    }
]

