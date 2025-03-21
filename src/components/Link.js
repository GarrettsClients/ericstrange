import React from 'react';
import '../styles/Link.css';

const Link = ({ link }) => {
  return (
    <div className="link-item">
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        <img src={link.image} alt={link.title} className="link-image" />
      </a>
    </div>
  );
};

export default Link;