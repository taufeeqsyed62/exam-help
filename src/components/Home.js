// src/components/Home.js
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const departments = ['First Year (ASGE)', 'Computer', 'Information Technology', 'Electronics', 'Mechanical', 'Civil'];

const Home = () => {
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
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="alert alert-warning">We don't guarantee the accuracy of notes.</div>
        <div className="alert alert-info">Recently, we have notes only for TE COMPUTER, sorry for the inconvenience.</div>
        <div className="row mt-4">
          {departments.map((department) => (
            <div key={department} className="col-md-4 mb-3">
              <Link to={`/department/${department}`} className="text-decoration-none">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{department}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Footer Section */}
      <footer className="bg-dark text-white py-2 mt-4">
        <div className="container text-center">
          <h5>Learners: {visitorCount}</h5>
        </div>
      </footer>
    </div>
  );
};

export default Home;
