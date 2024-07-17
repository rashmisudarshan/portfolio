import React from 'react';
import { useParams } from 'react-router-dom';
import './Painting.css';

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
  { id: 1, title: 'Himalayan Blue Poppy', image: nine, medium: 'Watercolour on Paper', description: 'This is a really pretty flower that I saw on my visit to Longwood Gardens. Apparently it doesnt bloom very often so I saw a lot of artists painting this flower. I of course did not know anything about how cool the flower itself is and just decided to paint it because it was pretty. Along with this I painted a couple of other flowers from the garden and these are displayed in Henry Art Gallery in Penn State Great Valley if you want to check it out!' },
  { id: 3, title: 'Rose', image: three, medium: 'Coloured Pencil on Paper', description: 'This is just a simple rose drawing I did a long time ago (2017 to be exact)' },
  { id: 10, title: 'Bunny', image: ten, medium: 'Watercolour on Paper', description: 'This is a little friend I saw on my hike down Chester Valley Trail. It took me around a couple of hours of outdoor live painting and this is when I discovered that the less time I spend on a painting the better it turns out.' },
  { id: 8, title: 'Froggo', image: eleven, medium: 'Gouache on Black Card Stock', description: 'This was my first attempt at Gouache painting because my mom decided to gift me a sketchbook with black paper. I enjoyed painting this so much that I decided to paint more nature related topics (Even though it is considered cliche to be painting plants and animals)' },
  { id: 4, title: 'Born To Run', image: four, medium: 'Pencil on Paper', description: 'Im a huge fan of Bruce Springsteen and while it is difficult for me to pick a favourite album, Born to Run is definitely up in the top 3. So I decided to draw the cover of this album depicting Bruce and Clarence Clemons' },
  { id: 5, title: 'Hedy Lamarr', image: five, medium: 'Pencil on Paper', description: 'As a Woman working in the tech industry Hedy Lamarr has always been a huge inspiration to me. Her inventions in spread spectrum communications and frequency hopping as well as her acting career have me hoping that someday I too can become an artist/inventor' },
  { id: 6, title: 'David Bowie', image: six, medium: 'Pencil on Paper', description: 'As an avid lover of classic rock music, I had to include a portrait of Bowie in my collection of rockstar portraits. I must give credit to my brother who made the leaf background so that I could take a more aesthetically cool picture.' },
  { id: 7, title: 'Freddie Mercury', image: seven, medium: 'Watercolour on paper', description: 'Adding to my collection of rock musician portaits is this painting of Freddy Mercury. Queen is one of my favourite bands and I absolutely adore this man. This painting is the most number of washes I have ever done in a watercolour painting and made me realize that watercolour portraiture can be pretty realistic too.' },
  { id: 9, title: 'Marilyn Monroe', image: one, medium: 'Watercolour on paper', description: 'This is my first watercolour portait. While experimenting with every possible medium and every possible subject I finally stumbled on the most difficult combination. While it was really hard to get this right I managed to get it looking somewhat recognizable and its pretty good for a first attempt I would say.' },
  { id: 2, title: 'Idli-Vada-Sambhar', image: two, medium: 'Oil on Canvas', description: 'They say "To be loved by an artist is to be immortalized in their art". Having such a huge responsibility thrust upon me, I decided to immortalize my love for my favourite breakfast, the Idli-Vada-Sambhar.' },
  // Add more artworks as needed
];

const Painting = () => {
  const { id } = useParams();
  const art = artworks.find((a) => a.id === parseInt(id));

  if (!art) {
    return <h2>Artwork not found</h2>;
  }

  return (
    
    <div className="art-details-page">
      <div className="art-details-container">
        <div className="art-frame">
          <img src={art.image} alt={art.title} className="art-image" />
        </div>
        <div className="art-info-card">
          <h1 className="art-title">{art.title}</h1>
          <p className="art-medium">{art.medium}</p>
        </div>
        <p className="art-description">{art.description}</p>
      </div>
    </div>
  );
};

export default Painting;
