import React from 'react';
import Tool from '../components/Tool.js';
import '../styles/Tools.css';
import { FaEnvelope, FaFilePdf, FaQrcode, FaVolumeUp, FaChartLine, FaBalanceScale } from 'react-icons/fa';

// Function to fetch stock data using Google search scraping
const fetchStockData = (ticker) => {
  const url = `https://www.google.com/search?q=${ticker}+stock+price`;
  window.open(url, '_blank');
};

// Function to rebalance portfolio with better calculations
const rebalancePortfolio = () => {
  const holdingsInput = prompt("Enter holdings as: Stock:Shares (comma-separated)");
  const targetsInput = prompt("Enter target allocations as: Stock:Percentage (comma-separated)");
  
  if (holdingsInput && targetsInput) {
    const holdings = Object.fromEntries(holdingsInput.split(',').map(h => h.split(':').map(v => v.trim())));
    const targets = Object.fromEntries(targetsInput.split(',').map(t => t.split(':').map(v => v.trim())));
    
    let totalValue = 0;
    Object.entries(holdings).forEach(([stock, shares]) => {
      totalValue += parseFloat(shares); // Assume each share is worth $1 for simplicity
    });
    
    let result = "Rebalance Instructions:\n";
    Object.entries(targets).forEach(([stock, percentage]) => {
      if (holdings[stock]) {
        const targetShares = (parseFloat(percentage) / 100) * totalValue;
        const difference = targetShares - parseFloat(holdings[stock]);
        result += `${stock}: ${difference > 0 ? 'Buy' : 'Sell'} ${Math.abs(difference)} shares\n`;
      }
    });
    
    alert(result);
  }
};

// Tool list
const tools = [
  {
    title: 'Generate Email',
    icon: <FaEnvelope />,
    action: () => {
      const recipient = prompt("Enter recipient email:");
      const subject = prompt("Enter subject:");
      const body = prompt("Enter email body:");
      if (recipient && subject && body) {
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
    }
  },
  {
    title: 'Word to PDF',
    icon: <FaFilePdf />,
    action: () => {
      alert("Upload a Word file to convert to PDF. Feature in development!");
    }
  },
  {
    title: 'Stock Tracker',
    icon: <FaChartLine />,
    action: () => {
      const ticker = prompt("Enter stock ticker:");
      if (ticker) fetchStockData(ticker.toUpperCase());
    }
  },
  {
    title: 'Portfolio Rebalancer',
    icon: <FaBalanceScale />,
    action: rebalancePortfolio
  },
  {
    title: 'QR Generator',
    icon: <FaQrcode />,
    action: () => {
      const text = prompt("Enter text or URL for QR code:");
      if (text) {
        const qrWindow = window.open();
        qrWindow.document.write(`<html><body><h2>Your QR Code:</h2><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}"></body></html>`);
      }
    }
  },
  {
    title: 'Text to Speech',
    icon: <FaVolumeUp />,
    action: () => {
      const message = prompt("Enter text to speak:");
      if (message) {
        const utterance = new SpeechSynthesisUtterance(message);
        speechSynthesis.speak(utterance);
      }
    }
  }
];

const Tools = () => {
  return (
    <div className="tools-section">
      <h2>Business Tools</h2>
      <div className="tools-carousel">
        {tools.map(tool => (
          <Tool key={tool.title} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;