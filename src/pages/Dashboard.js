import React from 'react';
import About from '../sections/About';
import Links from '../sections/Links';
import Tools from '../sections/Tools';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <About />
      <Links />
      <Tools />
    </div>
  );
};

export default Dashboard;
