import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './App.css';

import { Admin, Exams, HeaderCom } from './components';
<<<<<<< HEAD
// useApi commented out because it renders raw data from the API, and I don't need that here -  KB
=======

>>>>>>> b9084dd3faf8983b96c27deb32271c425b1184a9
import { useApi } from './hooks/use-api';
import { ExamDetails } from "./subComponent";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HeaderCom />}>
            <Route path='exams' element={<Exams />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/exams/details' element={<ExamDetails />} />
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
<<<<<<< HEAD
    const { response } = useApi({ path: 'exams' });
=======
     const { response } = useApi({ path: 'exams' });
>>>>>>> b9084dd3faf8983b96c27deb32271c425b1184a9

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

