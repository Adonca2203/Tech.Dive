import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// Import necessary libraries and components
import "./App.css";
import { Admin, Exams, HeaderCom } from './components';
import { Methods, useApi } from './hooks/use-api';
import { ExamDetails }  from "./subComponent";


// Create the router using react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    createRoutesFromElements(
        <Route path='/' element={<HeaderCom />}>
            <Route path='exams' element={<Exams />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='exams/details' element={<ExamDetails />} />
            <Route path="/exam-details/:id" element={<ExamDetails />} />  
        </Route>
    )
) )

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
  // Use the useApi hook to fetch the list of exams
  

  return (
    <div className="App">
      {/* Set up the router */}
      <RouterProvider router={router} />
      <header className="App-header">
        {/* Render the Exams component, passing in the response as a prop */}

      </header>
    </div>
  );

}

export default App;
