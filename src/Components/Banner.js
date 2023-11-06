import React from 'react';
import './banner.css';

function ImageBanner() {
  const images = [];
  for (let i = 722; i <= 755; i++) {
    images.push(`/images/DSCF0${i}.JPG`);
  }

  return (
    <div className="image-banner">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Imagem ${index}`}
          className="image-item"
        />
      ))}
    </div>
  );
}

export default ImageBanner;
