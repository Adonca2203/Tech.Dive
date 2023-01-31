import './App.css';
//importing component routes
import { Routes, Route } from "react-router-dom"
import Main from './pages/Main';
import Admin from './pages/Admin';
import Detail from './pages/Detail';
import About from './pages/About';

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {response}
        </p>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/about" element={<About/>} />
      </Routes>  
      </header>
    </div>
  );
}

export default App;
