import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocalStorageComponent from './local-storage/LocalStorageComponent';
import RandomComponent from './local-storage/RandomComponent';
import SessionStorageComponent from './session-storage/SessionStorageComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='local' element={<LocalStorageComponent/>}/>
          <Route path='session' element={<SessionStorageComponent/>}/>
          <Route path='random' element={<RandomComponent/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
