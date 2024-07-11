import React, { useState } from 'react';
import '../styles/About.css';

const About = () => {
  const initialDescription = `Spread over 510 sqft. this home is an ideal place to live in. Access to bus station & medical stores is very easy & convenient from this house. If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house. With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. Never miss out on lifestyle as Rassaz Mall`;

  const [expanded, setExpanded] = useState(false);
  const [description, setDescription] = useState(initialDescription);

  const handleShowMore = () => {
    setExpanded(true);
  };

  const handleShowLess = () => {
    setExpanded(false);
  };

  return (
    <div className='about-container'>
      <h2 className='about-title'>About Miraroad</h2>
      <p className='about-description'>{expanded ? description : `${description.slice(0, 200)}...`}</p>
      {!expanded && (
        <button onClick={handleShowMore} className="about-button">
          Show more
        </button>
      )}
      {expanded && (
        <button onClick={handleShowLess} className="about-button">
          Show less
        </button>
      )}
    </div>
  );
};

export default About;
