import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Homepage />} />
            </Routes>
            <Footer />
        </Router>
  );
}

export default App;