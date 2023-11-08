import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='main'>
      <h1 style={{ fontSize: '2.1rem', lineHeight: '1.4', letterSpacing: '0.5rem', textAlign: 'center', color: 'white', marginTop: '40px' }}>Gallery</h1>
      <div className="maindiv">
        {/* You can set the background image dynamically using state if needed */}
      </div>
    </div>
  );
}

export default Gallery;

