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
function App() {
    const { response } = useApi({ path: 'exams' });

    return (
        <div className="App">
            <RouterProvider router={router} />
            <header className="App-header">
                <p>
                    {response}
                </p>
            </header>

        </div>

    );
}

export default App;

