import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Gallery.css';
import one from '../../Photos/one.jpg';
import two from '../../Photos/two.jpg';
import three from '../../Photos/three.jpg';
import four from '../../Photos/four.jpg';
import five from '../../Photos/five.jpg';
import six from '../../Photos/six.jpg';
import seven from '../../Photos/seven.jpg';
import eight from '../../Photos/eight.jpg';
import nine from '../../Photos/nine.jpg';
import ten from '../../Photos/ten.jpg';
import eleven from '../../Photos/eleven.jpg';

const artworks = [
  { id: 1, title: 'Himalayan Blue Poppy', image: nine, medium: 'Oil on Canvas', description: 'Description of Artwork One' },
  { id: 3, title: 'Rose', image: three, medium: 'Watercolor', description: 'Description of Artwork Two' },
  { id: 10, title: 'Bunny', image: ten , medium: 'Watercolor', description: 'Description of Artwork Two' },
  { id: 8, title: 'Froggo', image: eleven, medium: 'Watercolor', description: 'Description of Artwork Two' },
  
  { id: 4, title: 'Born To Run', image: four, medium: 'Watercolor', description: 'Description of Artwork Two' },
  { id: 5, title: 'Hedy Lamarr', image: five, medium: 'Watercolor', description: 'Description of Artwork Two' },
  { id: 6, title: 'David Bowie', image: six, medium: 'Watercolor', description: 'Description of Artwork Two' },
  { id: 7, title: 'Freddie Mercury', image: seven, medium: 'Watercolor', description: 'Description of Artwork Two' },
  { id: 9, title: 'Marilyn Monroe', image: one, medium: 'Watercolor', description: 'Description of Artwork Two' },
  { id: 2, title: 'Idli-Vada-Sambhar', image: two, medium: 'Watercolor', description: 'Description of Artwork Two' },
  // Add more artworks as needed
];

const Gallery = () => {
  return (
    <div className="art-gallery-page">
      <Header />
      <div className="art-gallery-container">
        <h1 className="heading">Art Gallery</h1>
        <div className="art-grid">
          {artworks.map((art) => (
            <Link to={`/art-gallery/${art.id}`} key={art.id} className="art-card">
              <img src={art.image} alt={art.title} className="art-image" />
              <div className="art-title">{art.title}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
