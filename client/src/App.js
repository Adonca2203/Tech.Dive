import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './App.css';

import { Admin, Exams, HeaderCom } from './components';
import { useApi } from './hooks/use-api';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HeaderCom />}>
            <Route path='exams' element={<Exams />} />
            <Route path='/admin' element={<Admin />} />
        </Route>
    )
)
    //Example create Exam
    /*
    let data = {
        patientID: '63dab6944ef6a5f886ec8cbb',
        keyFindings: "This is a test made",
        brixiaScore: [2, 3, 4, 5],
        bmi: 12.2
    };
    const { response } = useApi({ path: "exams" }, { method: "POST" }, { data: data });
    response['message'] will return a success or failur message.
    */
//Example Exam List
const ExamList = (props) => {
    if (props.resp) {
        let resp = props.resp;
        return (
            <>
                {
                    resp.map(exam => (
                        <div key={exam["_id"]}>
                            <p>{exam["_id"]}</p>
                            <p>{exam["keyFindings"]}</p>
                            <p>{exam["brixiaScore"]}</p>
                        </div>
                    ))
                }
            </>
        );
    }
    return <p>Loading...</p>
}

function App() {
    const { response } = useApi({ path: 'exams' });

    return (
        <div className="App">
            <RouterProvider router={router} />
            <header className="App-header">
                <ExamList resp={response} />
            </header>

        </div>

    );
}

export default App;

