// src/components/About.js
import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>About Us</h2>
        <p>This website provides exam preparation material for various departments and years. Please note that we do not guarantee the accuracy of the notes provided.</p>
      </div>
    </div>
  );
};

export default About;
