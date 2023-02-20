import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// Import necessary libraries and components
import "./App.css";
import { Admin, Exams, HeaderCom } from "./components";
import { useApi } from "./hooks/use-api";

// Create the router using react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <div>
          <HeaderCom /> <Exams />
        </div>
      }
    >
      <Route path="/admin" element={<Admin />} />
    </Route>
  )
);

function App() {
  // Use the useApi hook to fetch the list of exams
  const { response } = useApi({ path: "exams" });
  const { response2 } = useApi({ path: "patients" });

  return (
    <div className="App">
      {/* Set up the router */}
      <RouterProvider router={router} />
      <header className="App-header">
        {/* Render the Exams component, passing in the response as a prop */}

        <Exams resp={response} resp2={response2} />
      </header>
    </div>
  );
}

export default App;
