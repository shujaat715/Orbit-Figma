import React from 'react';
import './Intro1.css';

const Intro1 = ({ imageSrc = 'https://dashboard.codeparrot.ai/api/image/Z5Dvi73tvuKvN6Wr/intro.png', altText = 'Introduction image' }) => {
  return (
    <div className="intro1-container">
      <img 
        src={imageSrc} 
        alt={altText}
        className="intro1-image"
      />
    </div>
  );
};

Intro1.defaultProps = {
  imageSrc: 'https://dashboard.codeparrot.ai/api/image/Z5Dvi73tvuKvN6Wr/intro.png',
  altText: 'Introduction image'
};

export default Intro1;

