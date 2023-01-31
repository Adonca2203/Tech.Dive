import { Route,  createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './App.css';

import Admin from './components/Admin';
import Exams from  './components/Exams';
import HeaderCom  from './components/HeaderCom';
import { useApi } from './hooks/use-api';


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<HeaderCom/>}>
        <Route path='exams' element={<Exams/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Route>

    )
   )
function App() {
  const { response } = useApi();
  
  return (
    <div className="App">
      <RouterProvider router={router}/> 
      <header className="App-header">  
        <p>
          {response}
        </p>
      </header> 
      
    </div>
    
  );
}

export default App;

