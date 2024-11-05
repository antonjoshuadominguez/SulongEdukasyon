import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LandingPageContent.css'; 

const LandingPage = () => {
  const navigate = useNavigate(); 

  const handleStartLearning = () => {
    navigate('/user-management'); 
  };

  return (
    <div>
      <div className="hero-section">
        <h1>Welcome to SulongEdukasyon</h1>
        <p>Explore the fun way to learn Filipino and Araling Panlipunan!</p>
        <button onClick={handleStartLearning}>Start Learning Now</button>
      </div>

      <div className="features-section">
        <div className="feature">
          <h2>Interactive Lessons</h2>
          <p>Engage with well-structured lessons designed to enhance understanding.</p>
        </div>
        <div className="feature">
          <h2>Gamified Learning Experience</h2>
          <p>Learn through games designed to make education fun and interactive.</p>
        </div>
        <div className="feature">
          <h2>Progress Tracking</h2>
          <p>Track your learning progress and achievements over time.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 
