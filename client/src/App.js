import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './App.css';

import { Admin, Exams, HeaderCom } from './components';
// useApi commented out because it renders raw data from the API, and I don't need that here -  KB
// import { useApi } from './hooks/use-api';
import { ExamDetails } from "./subComponent";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HeaderCom />}>
            <Route path='exams' element={<Exams />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/examdetails' element={<ExamDetails />} />
        </Route>

    )
)
function App() {
    // const { response } = useApi({ path: 'exams' });

    return (
        <div className="App">
            <RouterProvider router={router} />
            <header className="App-header">
                <p>
                    
                  
                </p>
            </header>

        </div>

    );
}

export default App;

