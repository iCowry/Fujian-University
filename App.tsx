import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Academics from './pages/Academics';
import DepartmentHome from './pages/DepartmentHome';
import MajorDetail from './pages/MajorDetail';
import Admissions from './pages/Admissions';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import Research from './pages/Research';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="research" element={<Research />} />
            
            <Route path="academics" element={<Academics />} />
            <Route path="academics/:deptId" element={<DepartmentHome />} />
            <Route path="academics/:deptId/:majorId" element={<MajorDetail />} />
            
            <Route path="admissions" element={<Admissions />} />
            <Route path="about" element={<About />} />
            {/* Fallback for other routes */}
            <Route path="*" element={<div className="pt-32 text-center text-2xl text-gray-400">Page not found</div>} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
