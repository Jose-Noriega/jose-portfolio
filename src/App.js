// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import SocialMedia from './pages/SocialMedia';
import Navigation from './pages/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/SocialMedia" element={<SocialMedia />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;