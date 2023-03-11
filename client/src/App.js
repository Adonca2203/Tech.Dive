import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './App.css';
import { Admin, CreateExam, Exams, HeaderCom } from './components';
import { CreatePatient } from './subComponent';
import { Methods, useApi } from './hooks/use-api';
import { ExamDetails, UpdateExam } from "./subComponent";

const router = createBrowserRouter(
  createRoutesFromElements(
    // Set the root route to render HeaderCom and Exams components
    <Route
      path="/"
      element={
        <div>
          <HeaderCom /> 
        </div>
      }
    >
      {/* Set up the /admin route to render the Admin component */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/exams/create" element={<CreateExam />} />
          <Route path="/exams/exam" element={<ExamDetails />} />
          <Route path="/exams/update" element={<UpdateExam />} />
          <Route path="/patients/create" element={<CreatePatient />} />
    </Route>
  )
);

function App() {
    const { response } = useApi({ path: 'exams' }, {method: Methods.GET});

  // Render the app component
  return (
    <div className="App">
      {/* Set up the router to be used in the app */}
      <RouterProvider router={router} />
      <header className="App-header">
        {/* Render the Exams component, passing in the response as a prop */}
      </header>
    </div>
  );

}

// Export the App component
export default App;
