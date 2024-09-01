// src/components/Footer.js
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get the visitor count from localStorage or initialize it to 1
    let count = localStorage.getItem('visitorCount');
    if (!count) {
      count = 1;
    } else {
      count = parseInt(count) + 1; // Increment the count by 1 for each visit
    }
    localStorage.setItem('visitorCount', count); // Store the updated count in localStorage
    setVisitorCount(count); // Set the state with the updated count
  }, []);

  return (
    <footer className="text-center bg-dark text-white py-3 mt-4">
      <h5>Learned Learners: {visitorCount}</h5>
    </footer>
  );
};

export default Footer;
