// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import DepartmentPage from './components/DepartmentPage';
import SubjectPage from './components/SubjectPage';
import RedirectToGoogleDrive from './components/RedirectToGoogleDrive';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/department/:name" element={<DepartmentPage />} />
        <Route path="/subject/:department/:year" element={<SubjectPage />} />
         {/* Specific Route for TE Computer Subject 1 PYQ Redirection */}
         <Route path="/computer/TE/subject1/pyq" element={<RedirectToGoogleDrive />} />
      </Routes>
    </Router>
  );
};

export default App;
