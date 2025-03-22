import React from 'react';
import Tool from '../components/Tool.js';
import '../styles/Tools.css';
import { FaEnvelope, FaFilePdf, FaQrcode, FaVolumeUp, FaChartLine, FaBalanceScale } from 'react-icons/fa';

// Function to fetch stock data using Google search scraping
const fetchStockData = (ticker) => {
  const url = `https://www.google.com/search?q=${ticker}+stock+price`;
  window.open(url, '_blank');
};

// Function to convert Word to PDF (simplified, opens a free online converter)
const convertWordToPDF = () => {
  const fileInput = prompt("Paste a URL to a Word doc or type 'upload' to use a converter:");
  if (fileInput) {
    if (fileInput.toLowerCase() === 'upload') {
      window.open('https://smallpdf.com/word-to-pdf', '_blank'); // Opens a free converter site
    } else {
      const pdfUrl = `https://api.convertio.co/convert?url=${encodeURIComponent(fileInput)}`; // Simplified example
      window.open(pdfUrl, '_blank');
    }
  }
};

// Function to rebalance portfolio with better calculations
const rebalancePortfolio = () => {
  const holdingsInput = prompt("Enter holdings (e.g., AAPL:50, MSFT:30):");
  const targetsInput = prompt("Enter targets (e.g., AAPL:60, MSFT:40):");
  
  if (holdingsInput && targetsInput) {
    const holdings = Object.fromEntries(holdingsInput.split(',').map(h => h.split(':').map(v => v.trim())));
    const targets = Object.fromEntries(targetsInput.split(',').map(t => t.split(':').map(v => v.trim())));
    
    let totalShares = 0;
    Object.values(holdings).forEach(shares => totalShares += parseFloat(shares));
    
    let result = "Rebalance Plan:\n";
    Object.entries(targets).forEach(([stock, targetPercent]) => {
      if (holdings[stock]) {
        const currentShares = parseFloat(holdings[stock]);
        const targetShares = (parseFloat(targetPercent) / 100) * totalShares;
        const difference = targetShares - currentShares;
        result += `${stock}: ${difference > 0 ? 'Buy' : 'Sell'} ${Math.abs(difference.toFixed(2))} shares\n`;
      } else {
        result += `${stock}: Buy ${((parseFloat(targetPercent) / 100) * totalShares).toFixed(2)} shares (new position)\n`;
      }
    });
    
    window.alert(result); // Shows the result right away
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
    action: convertWordToPDF // Updated to open a converter
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
    action: rebalancePortfolio // Already set to run on click
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
      const text = prompt("Enter text to speak:");
      if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
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