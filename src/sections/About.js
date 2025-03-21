import React from 'react';
import '../styles/About.css';
import Picture from '../assets/images/es.png';
import { FaLightbulb, FaBriefcase, FaUsers } from 'react-icons/fa'; // Icons for business theme

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
              <FaLightbulb className="icon" />
              <span>Problem Solver</span>
            </div>
            <div className="icon-item">
              <FaBriefcase className="icon" />
              <span>Strategic Thinker</span>
            </div>
            <div className="icon-item">
              <FaUsers className="icon" />
              <span>Team Leader</span>
            </div>
          </div>
        </div>
        <img 
          src={Picture}
          alt="Lucas Fedders" 
          className="about-image" 
        />
      </div>
    </div>
  );
};

export default About;
