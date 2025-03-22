import React from 'react';
import '../styles/About.css';
import Picture from '../assets/images/es.png';
import { FaChartLine, FaShieldAlt, FaGlobe } from 'react-icons/fa'; // New icons

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p>
            I’m Eric Strange, CFA, a Principal & Portfolio Manager at Bahl & Gaynor Investment Counsel 
            with over 20 years of experience in investment portfolio management.  
            Previously, I held senior roles at Fifth Third Private Bank and Renaissance Investment Management.  
            I earned my BS in Accounting from Georgetown College and became a Chartered Financial Analyst in 2002.
          </p>
          <p>
            Beyond my career, I’m a devoted follower of Jesus, actively serving as a ministry partner and volunteer.  
            As a proud father of three, I strive to lead with faith and integrity in all that I do.
          </p>
          <div className="about-icons">
            <div className="icon-item">
              <FaChartLine className="icon" />
              <span>Analytical Thinker</span>
            </div>
            <div className="icon-item">
              <FaShieldAlt className="icon" />
              <span>Risk Manager</span>
            </div>
            <div className="icon-item">
              <FaGlobe className="icon" />
              <span>Market Strategist</span>
            </div>
          </div>
        </div>
        <img 
          src={Picture}
          alt="Eric Strange" // Fixed name to match bio
          className="about-image" 
        />
      </div>
    </div>
  );
};

export default About;