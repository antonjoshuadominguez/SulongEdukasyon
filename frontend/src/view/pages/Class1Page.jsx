import React from 'react';
import '../css/Classes.css';
import { useNavigate } from 'react-router-dom';

const Class1Page = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/classes');
  };

  return (
    <div className="class-detail-page">
      <div className="class-detail-content">
        <h1 className="class-detail-header">Class 1: Land Forms</h1>
        <p className="class-detail-description">
          Explore the different landforms on Earth, including mountains, valleys,
          plateaus, and more. Click below for more details.
        </p>
        <a
          href="https://fcrr.org/sites/g/files/upcbnu2836/files/media/PDFs/coaches/florida/digital_books/What_are_landforms_%2001-24.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="class-detail-link"
        >
          View Land Forms Resource
        </a>
        <button onClick={goBack} className="back-button">
          Back to Classes
        </button>
      </div>
    </div>
  );
};

export default Class1Page;
