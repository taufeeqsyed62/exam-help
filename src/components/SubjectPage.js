// src/components/SubjectPage.js
import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import { useParams } from 'react-router-dom';

const resources = [
  { name: 'PYQ Solution', link: '/computer/TE/subject1/pyq' }, // Example links
  { name: 'Decode', link: '/computer/TE/subject1/decode' },
  { name: 'Note', link: '/computer/TE/subject1/note' }
];

const SubjectPage = () => {
  const { department, year } = useParams();

  return (
    <div>
      <Navbar />
      <SearchBar placeholder="Search resources..." />
      <div className="container mt-4">
        <h2>{department} - {year}</h2>
        <div className="row">
          {resources.map((resource) => (
            <div key={resource.name} className="col-md-4 mb-3">
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="card text-white bg-success">
                  <div className="card-body">
                    <h5 className="card-title">{resource.name}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
