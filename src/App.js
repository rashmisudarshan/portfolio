import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#software-projects">Software Projects</a></li>
            <li><a href="#art-gallery">Art Gallery</a></li>
            <li><a href="#book-reviews">Book Reviews</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="software-projects">
          <h2>Software Projects</h2>
          <p>Innovative coding solutions and applications.</p>
        </section>
        <section id="art-gallery">
          <h2>Art Gallery</h2>
          <p>A collection of original artwork and creative expressions.</p>
        </section>
        <section id="book-reviews">
          <h2>Book Reviews</h2>
          <p>Insightful analyses of captivating books.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
