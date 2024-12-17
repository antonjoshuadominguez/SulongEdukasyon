import React, { useState } from 'react';
import '../css/Dashboard.css';
import Sidebar from './Sidebar';
import { fetchSections, createSection, updateSection, deleteSection } from '../../controller/SectionController';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sections, setSections] = useState([]);
  const [sectionName, setSectionName] = useState('');
  const [sectionDescription, setSectionDescription] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingSection, setEditingSection] = useState(null); // Track the section being edited
  const teacherId = 1;

  // Function to fetch sections when the button is clicked
  const loadSections = async () => {
    setLoading(true);  // Set loading to true when fetching sections
    try {
      const data = await fetchSections(teacherId);
      setSections(data);
    } catch (error) {
      console.error('Error fetching sections:', error);
    } finally {
      setLoading(false);  // Set loading to false after fetching is complete
    }
  };

  const handleCogButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const openCreateSectionPopup = () => {
    setIsPopupOpen(true);
  };

  const closeCreateSectionPopup = () => {
    setIsPopupOpen(false);
    setSectionName('');
    setSectionDescription('');
    setEditingSection(null); // Reset editingSection state when closing the popup
  };

  const handleCreateSection = async () => {
    if (sectionName && sectionDescription) {
      const sectionData = {
        sectionName,
        sectionDescription,
        teacherID: teacherId,
      };

      try {
        const newSection = await createSection(sectionData);
        setSections([...sections, newSection]);
        closeCreateSectionPopup();
      } catch (error) {
        console.error('Error creating section:', error);
        alert('Error creating section');
      }
    } else {
      alert('Please enter both Section Name and Section Description.');
    }
  };

  const handleUpdateSection = async () => {
    if (sectionName && sectionDescription && editingSection) {
      const updatedData = {
        sectionName,
        sectionDescription,
        teacherID: teacherId, // Ensure the teacherID is included
      };

      try {
        const updatedSection = await updateSection(editingSection.sectionID, updatedData);
        // Update the sections list with the updated section
        const updatedSections = sections.map((section) =>
          section.sectionID === editingSection.sectionID ? updatedSection : section
        );
        setSections(updatedSections);
        closeCreateSectionPopup();
      } catch (error) {
        console.error('Error updating section:', error);
        alert('Error updating section');
      }
    } else {
      alert('Please enter both Section Name and Section Description.');
    }
  };

  const handleDeleteSection = async (sectionId) => {
    try {
      await deleteSection(sectionId);
      setSections(sections.filter((section) => section.sectionID !== sectionId));
    } catch (error) {
      console.error('Error deleting section:', error);
      alert('Error deleting section');
    }
  };

  // Open the edit section popup and pre-fill the section data
  const openEditSectionPopup = (section) => {
    setEditingSection(section); // Set the section being edited
    setSectionName(section.section_name); // Pre-fill section name
    setSectionDescription(section.section_description); // Pre-fill section description
    setIsPopupOpen(true);
  };

  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Welcome to Your Dashboard</h1>
          <button className="cog-button" onClick={handleCogButtonClick}>
            <img className="cog-logo" src="/coglogo.png" alt="Settings" />
          </button>
        </header>
        <main className="dashboard-main">
          <div className="dashboard-layout">
            <div className="left-section-container">
              <div className="create-section-container">
                <h2>Create Section</h2>
                <button className="create-section-button" onClick={openCreateSectionPopup}>
                  Create Section
                </button>
              </div>
              <div className="fetch-sections-container">
                <button className="fetch-sections-button" onClick={loadSections} disabled={loading}>
                  {loading ? 'Loading Sections...' : 'Fetch Sections'}
                </button>
              </div>
            </div>
            <div className="right-section-container">
              <div className="my-rooms-container">
                <h2>My Rooms</h2>
                <div className="rooms-content">
                  {sections.length > 0 ? (
                    sections.map((section) => (
                      <div key={section.sectionID} className="section-card">
                        <h3>{section.section_name}</h3>
                        <p>{section.section_description}</p>
                        <button className="add-student-button">Add Student</button>
                        <button
                          className="edit-section-button"
                          onClick={() => openEditSectionPopup(section)} // Open edit popup for the selected section
                        >
                          Edit Section
                        </button>
                        <button
                          className="delete-section-button"
                          onClick={() => handleDeleteSection(section.sectionID)}
                        >
                          Delete Section
                        </button>
                      </div>
                    ))
                  ) : (
                    <p>No sections created yet.</p>
                  )}
                </div>
              </div>

              {/* Added My Lessons container */}
              <div className="my-lessons-container">
                <h2>My Lessons</h2>
                <div className="lessons-content">
                  <p>No lessons available yet.</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Create/edit section popup */}
        {isPopupOpen && (
          <div className="create-section-popup-overlay">
            <div className="create-section-popup-content">
              <div className="create-section-popup-header">
                <h3>{editingSection ? 'Edit Section' : 'Create Section'}</h3>
                <button className="close-popup-button" onClick={closeCreateSectionPopup}>X</button>
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
                  onClick={editingSection ? handleUpdateSection : handleCreateSection}
                >
                  {editingSection ? 'Update Section' : 'Create Section'}
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
