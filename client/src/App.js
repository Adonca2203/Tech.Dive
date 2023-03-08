// Import necessary libraries and components from react-router-dom and the App.css file
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import "./App.css";
import { Admin, Exams, HeaderCom } from './components';
import { Methods, useApi } from './hooks/use-api';
import { ExamDetails }  from "./subComponent";


// Create the router using react-router-dom by defining the routes
const router = createBrowserRouter(
  createRoutesFromElements(
    // Set the root route to render HeaderCom and Exams components
    <Route
      path="/"
      element={
        <div>
          <HeaderCom /> <Exams />
        </div>
      }
    >
      {/* Set up the /admin route to render the Admin component */}
      <Route path="/admin" element={<Admin />} />
    </Route>
  )
);

function App() {
  // Use the useApi hook to fetch the list of exams

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
