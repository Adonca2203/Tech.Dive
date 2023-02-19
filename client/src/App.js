import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
// Import necessary libraries and components
import './App.css';
import { Admin, Exams, HeaderCom } from './components';
import { useApi } from './hooks/use-api';

// Create the router using react-router-dom
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<div><HeaderCom /> <Exams /></div>}>
            <Route path='/admin' element={<Admin />} />
        </Route>
    )
)

// This component is used to render a list of exams
const ExamList = (props) => {
    // If there is a response passed as a prop, render the list of exams
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
    // If there is no response yet, render a "Loading..." message
    return <p>Loading...</p>
}

function App() {
    // Use the useApi hook to fetch the list of exams
    const { response } = useApi({ path: 'exams' });

    return (
        <div className="App">
            {/* Set up the router */}
            <RouterProvider router={router} />
            <header className="App-header">
                {/* Render the ExamList component, passing in the response as a prop */}
                <ExamList resp={response} />
            </header>
        </div>
    );
}

export default App;
