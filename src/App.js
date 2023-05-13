import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import InputContainer from './components/inputs';
import Dashboard from './components/landingPage';


function App() {
    
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<InputContainer />} />
   </Routes>
    </div>
    </Router>
  );
}

export default App;
