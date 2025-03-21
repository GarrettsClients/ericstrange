import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Eric Strange' Professional Portfolio</h1>
        <p>
          I am Eric Strange, a leader, problem solver, and aspiring business professional. My background spans
          hands-on mechanical work as a go-kart mechanic, leadership roles in Young Life, and the discipline of a varsity athlete.
        </p>
        <Link to="/dashboard" className="dashboard-link">Explore My Work</Link>
      </div>
    </div>
  );
};

export default Home;
