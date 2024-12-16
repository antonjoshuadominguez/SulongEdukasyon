import React from 'react';
import '../css/Classes.css';
import { useNavigate } from 'react-router-dom';

const Class3Page = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/classes');
  };

  return (
    <div className="class-detail-page">
      <div className="class-detail-content">
        <h1 className="class-detail-header">Class 3: Grade 6 Example</h1>
        <p className="class-detail-description">
          This is an example class for Grade 6 students. Click below to access
          additional resources and examples for learning.
        </p>
        <a
          href="https://example.com/grade-6-resource"
          target="_blank"
          rel="noopener noreferrer"
          className="class-detail-link"
        >
          View Grade 6 Resource
        </a>
        <button onClick={goBack} className="back-button">
          Back to Classes
        </button>
      </div>
    </div>
  );
};

export default Class3Page;
