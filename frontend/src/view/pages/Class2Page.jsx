import React from 'react';
import '../css/Classes.css';
import { useNavigate } from 'react-router-dom';

const Class2Page = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/classes');
  };

  return (
    <div className="class-detail-page">
      <div className="class-detail-content">
        <h1 className="class-detail-header">Class 2: Bodies of Water</h1>
        <p className="class-detail-description">
          Learn about Earth's water bodies, including oceans, rivers, lakes, and
          ponds. Discover fascinating facts and figures.
        </p>
        <a
          href="https://example.com/bodies-of-water-resource"
          target="_blank"
          rel="noopener noreferrer"
          className="class-detail-link"
        >
          View Bodies of Water Resource
        </a>
        <button onClick={goBack} className="back-button">
          Back to Classes
        </button>
      </div>
    </div>
  );
};

export default Class2Page;
