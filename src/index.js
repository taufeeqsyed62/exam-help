// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(<App />);
