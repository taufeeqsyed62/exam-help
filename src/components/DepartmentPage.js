// src/components/DepartmentPage.js
import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import { Link, useParams } from 'react-router-dom';

const years = ['SE', 'TE', 'BE', 'ME'];

const DepartmentPage = () => {
  const { name } = useParams();

  return (
    <div>
      <Navbar />
      <SearchBar placeholder="Search year..." />
      <div className="container mt-4">
        <h2>{name} Department</h2>
        <div className="row">
          {years.map((year) => (
            <div key={year} className="col-md-3 mb-3">
              <Link to={`/subject/${name}/${year}`} className="text-decoration-none">
                <div className="card bg-light">
                  <div className="card-body">
                    <h5 className="card-title">{year}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
