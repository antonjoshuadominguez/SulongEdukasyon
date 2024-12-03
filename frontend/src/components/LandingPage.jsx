import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for routing
import '../css/LandingPage.css';  // Import the CSS for styling

const LandingPage = () => {
  const navigate = useNavigate();  // Hook to navigate

  const handleStartLearning = () => {
    navigate('/user-management');  // Navigate to UserManagement page
  };

  return (
    <div className="landing-page">
      <header className="top-bar">
        <div className="branding">SulongEdukasyon</div>
        <nav className="nav-buttons">
          <button className="nav-button">Home</button>
          <button className="nav-button">About</button>
          <button className="nav-button">Lessons</button>
          <button className="nav-button">Games</button>
        </nav>
      </header>

      <main>
        {/* Welcome Section */}
        <section className="welcome-section">
          <h1>Welcome to SulongEdukasyon</h1>
          <p>Explore the fun way to learn Filipino and Araling Panlipunan!</p>
          <button className="cta-button" onClick={handleStartLearning}>Start Learning Now</button>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="feature-card">
            <h2>Interactive Lessons</h2>
            <p>Engage with well-structured lessons designed to enhance understanding.</p>
          </div>
          <div className="feature-card">
            <h2>Gamified Learning Experience</h2>
            <p>Learn through games designed to make education fun and interactive.</p>
          </div>
          <div className="feature-card">
            <h2>Progress Tracking</h2>
            <p>Track your learning progress and achievements over time.</p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>Contact us: capstone.g01.04@gmail.com</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Support</a>
        </div>
        <p>© 2024 SulongEdukasyon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
