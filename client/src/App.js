import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './App.css';

import { Admin, Exams, HeaderCom } from './components';
import { Methods, useApi } from './hooks/use-api';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HeaderCom />}>
            <Route path='exams' element={<Exams />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/examdetails' element={<ExamDetails />} />
        </Route>
    )
)

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
    const { response } = useApi({ path: 'exams' }, {method: Methods.GET});

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

