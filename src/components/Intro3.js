import React from 'react';
import './Intro3.css';

const Intro3 = ({ imageSrc = 'https://dashboard.codeparrot.ai/api/image/Z5DxoXhIZI-ZK8ba/intro.png', altText = 'Introduction image' }) => {
  return (
    <div className="intro3-container">
      <img 
        src={imageSrc} 
        alt={altText}
        className="intro3-image"
      />
    </div>
  );
};

Intro3.defaultProps = {
  imageSrc: 'https://dashboard.codeparrot.ai/api/image/Z5DxoXhIZI-ZK8ba/intro.png',
  altText: 'Introduction image'
};

export default Intro3;

