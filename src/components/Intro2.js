import React from 'react';
import './Intro2.css';

const Intro2 = ({ imageSrc = 'https://dashboard.codeparrot.ai/api/image/Z5Dw2r3tvuKvN6Wt/intro.png', altText = 'Introduction image' }) => {
  return (
    <div className="intro2-container">
      <img 
        src={imageSrc} 
        alt={altText}
        className="intro2-image"
      />
    </div>
  );
};

Intro2.defaultProps = {
  imageSrc: 'https://dashboard.codeparrot.ai/api/image/Z5Dw2r3tvuKvN6Wt/intro.png',
  altText: 'Introduction image'
};

export default Intro2;

