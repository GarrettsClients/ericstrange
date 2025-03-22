import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Eric Strange' Professional Portfolio</h1>
        <p>
          I’m Eric Strange, a dedicated financial professional, bringing experience, integrity, and a passion for helping others succeed.
          I’m a devoted follower of Jesus, an active ministry partner, and a member of the city council, striving to lead with faith in all I do.
        </p>
        <Link to="/dashboard" className="dashboard-link">Explore My Work</Link>
      </div>
    </div>
  );
};

export default Home;
