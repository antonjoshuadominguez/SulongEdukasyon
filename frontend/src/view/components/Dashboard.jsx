import React, { useState } from 'react';
import '../css/Dashboard.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

  // Function to handle opening the modal when the cog is clicked
  const handleCogButtonClick = () => {
    setIsModalOpen(true); // Open modal
  };

  // Function to handle closing the modal when the close button is clicked
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  // Function to handle logging out (this can be modified for actual logout functionality)
  const handleLogout = () => {
    alert('Logging out!'); // Replace with actual logout logic
    setIsModalOpen(false); // Close modal after logging out
  };

  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Welcome to Your Dashboard</h1>
        </header>
        <main className="dashboard-main">
          <section className="dashboard-section">
            <h2>Main Dashboard Content</h2>
            <p>Here is where the core functionalities will appear.</p>
          </section>
        </main>

        {/* Cog Logo Button */}
        <button className="cog-button" onClick={handleCogButtonClick}>
          <img src="/coglogo.png" alt="Cog Logo" className="cog-logo" />
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>User Name</h2>
                <button className="close-button" onClick={handleCloseModal}>
                  X
                </button>
              </div>
              <div className="modal-body">
                <p>Your user information will be here.</p>
              </div>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
