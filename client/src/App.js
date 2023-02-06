import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './App.css';

import { Admin, Exams, HeaderCom } from './components';
import { useApi } from './hooks/use-api';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<div><HeaderCom /> <Exams /></div>}>
            <Route path='/admin' element={<Admin />} />
        </Route>

    )
)

const ExamList = (props) => {
    if (props.resp) {
        let jsonRep = JSON.parse(props.resp);
        return (
            <>
                {
                    jsonRep.map(exam => (
                        <>
                            <p>{exam["_id"]}</p>
                            <p>{exam["keyFindings"]}</p>
                        </>
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

