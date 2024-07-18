import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import ProjectsPage from './components/Projects/Projects';
import ProjectDetailPage from './components/ProjectDetail/ProjectDetail';
import ArtGalleryPage from './components/Gallery/Gallery';
import ArtDetailPage from './components/Painting/Painting';
import Bookshelf from './components/BookShelf/Bookshelf';
import BookDetail from './components/BookDetail/BookDetail';
import books from './booksData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Routes>
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                <Route path="/art-gallery" element={<ArtGalleryPage />} />
                <Route path="/art-gallery/:id" element={<ArtDetailPage />} />
                <Route path="/books" element={<Bookshelf books={books} />} />
                <Route path="/book/:id" element={<BookDetail books={books} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Homepage />} />
            </Routes>
            <Footer />
        </Router>
  );
}

export default App;