import React from 'react';
import '../styles/Tool.css';

const Tool = ({ tool }) => {
  return (
    <div className="tool-item" onClick={tool.action}>
      <div className="tool-icon">{tool.icon}</div>
      <p>{tool.title}</p>
    </div>
  );
};

export default Tool;
