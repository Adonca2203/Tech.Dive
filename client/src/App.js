import './App.css';
import { MainPage, AdminPage, DetailPage } from './pages';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MainPage response={response} />
            </header>
        </div>
    );
}

export default App;
