import React from 'react';
import Link from '../components/Link.js'
import '../styles/Links.css';

// Import images
import bahlGaynorImg from '../assets/images/bg.png';
import gotQuestionsImg from '../assets/images/gq.png';
import schwabImg from '../assets/images/cs.png';

const links = [
  {
    title: 'Bahl & Gaynor',
    url: 'https://bahl-gaynor.com',
    image: bahlGaynorImg,
  },
  {
    title: 'Got Questions',
    url: 'https://gotquestions.org',
    image: gotQuestionsImg,
  },
  {
    title: 'Schwab',
    url: 'https://schwab.com',
    image: schwabImg,
  },
];

const Links = () => {
  return (
    <div className="links-section">
      <h2>Useful Links</h2>
      <div className="links-carousel">
        {links.map(link => (
          <Link key={link.title} link={link} />
        ))}
        {/* Duplicate items for smooth looping */}
        {links.map(link => (
          <Link key={link.title + '-dup'} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Links;