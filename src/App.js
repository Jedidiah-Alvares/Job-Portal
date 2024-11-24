import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { ApplicationForm } from './components/ApplicationForm';
import { useState } from 'react';
import { Header } from './components/Header';

function App() {
  const [selectedJob, setSelectedJob] = useState({});

  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home selectedJob={selectedJob} setSelectedJob={setSelectedJob} />} />
    <Route path='/apply-form/' element={<ApplicationForm selectedJob={selectedJob}/>} />
  
    </Routes>
    
    
    </>
    
  );
}

export default App;
