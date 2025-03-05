import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SkinAnalysis from './pages/SkinAnalysis';
import MRIAnalysis from './pages/MRIAnalysis';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skin-analysis" element={<SkinAnalysis />} />
        <Route path="/mri-analysis" element={<MRIAnalysis />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;