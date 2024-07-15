import React from 'react';
import { useParams } from 'react-router-dom';
import './Painting.css';

const artworks = [
  { id: 1, title: 'Artwork One', image: 'path/to/image1.jpg', medium: 'Oil on Canvas', description: 'Description of Artwork One' },
  { id: 2, title: 'Artwork Two', image: 'path/to/image2.jpg', medium: 'Watercolor', description: 'Description of Artwork Two' },
  // Add more artworks as needed
];

const Painting = () => {
  const { id } = useParams();
  const art = artworks.find((a) => a.id === parseInt(id));

  if (!art) {
    return <h2>Artwork not found</h2>;
  }

  return (
    <div className="art-detail-page">
      <h1>{art.title}</h1>
      <img src={art.image} alt={art.title} className="art-detail-image" />
      <p><strong>Medium:</strong> {art.medium}</p>
      <p><strong>Description:</strong> {art.description}</p>
    </div>
  );
};

export default Painting;
