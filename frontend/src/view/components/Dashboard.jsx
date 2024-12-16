import React, { useState } from 'react';
import '../css/Dashboard.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility
  const [sections, setSections] = useState([]); // State to track created sections
  const [sectionName, setSectionName] = useState(''); // Section name input
  const [sectionDescription, setSectionDescription] = useState(''); // Section description input
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to handle popup visibility

  // Function to handle opening the modal when the cog is clicked
  const handleCogButtonClick = () => {
    setIsModalOpen(true); // Open modal
  };

  // Function to handle closing the modal when the close button is clicked
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  // Function to handle logging out
  const handleLogout = () => {
    alert('Logging out!'); // Replace with actual logout logic
    setIsModalOpen(false); // Close modal after logging out
  };

  // Function to open the "Create Section" popup
  const openCreateSectionPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the "Create Section" popup
  const closeCreateSectionPopup = () => {
    setIsPopupOpen(false);
    setSectionName('');
    setSectionDescription('');
  };

  // Function to handle creating a new section
  const createSection = () => {
    if (sectionName && sectionDescription) {
      // Add new section to the sections list
      const newSection = {
        name: sectionName,
        description: sectionDescription,
      };
      setSections([...sections, newSection]);

      // Close popup after creating section
      closeCreateSectionPopup();
    } else {
      alert('Please enter both Section Name and Section Description.');
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Welcome to Your Dashboard</h1>
          {/* Cog Icon */}
          <button className="cog-button" onClick={handleCogButtonClick}>
            <img
              className="cog-logo"
              src="/coglogo.png" // Adjusted path for image in the public folder
              alt="Settings"
            />
          </button>
        </header>
        <main className="dashboard-main">
          <section className="dashboard-section">
            {/* Username, Role, and Create Section Button */}
            <div className="dashboard-user-container">
              <div className="username-display">Teacher</div>
              <div className="role-display">Teacher</div>
              <button
                className="create-section-button"
                onClick={openCreateSectionPopup}
              >
                Create Section
              </button>
            </div>

            {/* Display created sections */}
            <div className="created-sections-container">
              {sections.length > 0 ? (
                sections.map((section, index) => (
                  <div key={index} className="section-card">
                    <h3>{section.name}</h3>
                    <p>{section.description}</p>
                    <button className="add-student-button">Add Student</button>
                    <button className="edit-section-button">Edit Section</button>
                  </div>
                ))
              ) : (
                <p>No sections created yet.</p>
              )}
            </div>
          </section>
        </main>

        {/* Create Section Popup */}
        {isPopupOpen && (
          <div className="create-section-popup-overlay">
            <div className="create-section-popup-content">
              <div className="create-section-popup-header">
                <h3>Create Section</h3>
                <button
                  className="close-popup-button"
                  onClick={closeCreateSectionPopup}
                >
                  X
                </button>
              </div>
              <div className="create-section-popup-body">
                <input
                  type="text"
                  placeholder="Section Name"
                  value={sectionName}
                  onChange={(e) => setSectionName(e.target.value)}
                />
                <textarea
                  placeholder="Section Description"
                  value={sectionDescription}
                  onChange={(e) => setSectionDescription(e.target.value)}
                ></textarea>
                <button
                  className="create-section-popup-button"
                  onClick={createSection}
                >
                  Create Section
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Settings Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Settings</h2>
                <button className="close-button" onClick={handleCloseModal}>
                  X
                </button>
              </div>
              <div className="modal-body">
                <p>Settings content goes here.</p>
                <button
                  className="logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
