import React, { useState } from 'react';
import '../css/Dashboard.css';
import Sidebar from './Sidebar';
import { 
  fetchSections, 
  createSection, 
  updateSection, 
  deleteSection, 
  addStudentToSection, 
  removeStudentFromSection, 
  fetchAllStudents, 
  fetchStudentsInSection, 
  updateStudent 
} from '../../controller/SectionController';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Add student modal visibility
  const [sections, setSections] = useState([]);
  const [sectionName, setSectionName] = useState('');
  const [sectionDescription, setSectionDescription] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingSection, setEditingSection] = useState(null); // Track the section being edited
  const [myLessons, setMyLessons] = useState([]);  // New state to store lessons
  const [studentFirstName, setStudentFirstName] = useState(''); // State for student first name
  const [studentLastName, setStudentLastName] = useState(''); // State for student last name
  const [selectedSectionId, setSelectedSectionId] = useState(null); // State to track selected section
  const [students, setStudents] = useState([]);  // State for storing students
  const [loadingStudents, setLoadingStudents] = useState(false);  // Loading state for students
  const teacherId = 1;

  // Function to fetch sections when the button is clicked
  const loadSections = async () => {
    setLoading(true);
    try {
      const data = await fetchSections(teacherId);
      setSections(data);
    } catch (error) {
      console.error('Error fetching sections:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch lessons for the teacher
  const loadLessons = () => {
    const fetchedLessons = [
      { id: 1, name: "Math Lesson 1" },
      { id: 2, name: "English Lesson 1" },
    ];
    setMyLessons(fetchedLessons);
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

  const openAddStudentModal = (sectionId) => {
    setSelectedSectionId(sectionId); // Set the section ID where the student should be added
    setStudentFirstName(''); // Reset student first name
    setStudentLastName(''); // Reset student last name
    setIsModalOpen(true); // Open the modal for adding a student
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

  const openEditSectionPopup = (section) => {
    setEditingSection(section); // Set the section being edited
    setSectionName(section.section_name); // Pre-fill section name
    setSectionDescription(section.section_description); // Pre-fill section description
    setIsPopupOpen(true);
  };

  // Add student to the section
  const handleAddStudent = async () => {
    if (studentFirstName && studentLastName) {
      const newStudent = {
        firstName: studentFirstName,
        lastName: studentLastName,
      };

      try {
        await addStudentToSection(selectedSectionId, newStudent);
        // Update the sections list to include the new student
        const updatedSections = sections.map((section) => {
          if (section.sectionID === selectedSectionId) {
            section.students.push({ firstName: studentFirstName, lastName: studentLastName });
          }
          return section;
        });
        setSections(updatedSections);
        setIsModalOpen(false); // Close the modal after adding student
      } catch (error) {
        console.error('Error adding student:', error);
        alert('Error adding student');
      }
    } else {
      alert('Please provide both student first name and last name.');
    }
  };

  // Remove student from section
  const handleRemoveStudent = async (sectionId, studentId) => {
    try {
      await removeStudentFromSection(sectionId, studentId);
      const updatedSections = sections.map((section) => {
        if (section.sectionID === sectionId) {
          section.students = section.students.filter((student) => student.studentId !== studentId);
        }
        return section;
      });
      setSections(updatedSections);
    } catch (error) {
      console.error('Error removing student:', error);
      alert('Error removing student');
    }
  };

  // Fetch all students manually
  const loadStudents = async () => {
    setLoadingStudents(true);
    try {
      const data = await fetchAllStudents();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoadingStudents(false);
    }
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
              {/* My Lessons Section */}
              <div className="my-lessons-container">
                <h2>My Lessons</h2>
                <button className="fetch-lessons-button" onClick={loadLessons}>
                  Load Lessons
                </button>
                <div className="lessons-content">
                  {myLessons.length > 0 ? (
                    myLessons.map((lesson) => (
                      <div key={lesson.id} className="lesson-card">
                        <h3>{lesson.name}</h3>
                      </div>
                    ))
                  ) : (
                    <p>No lessons available.</p>
                  )}
                </div>
              </div>

              {/* My Sections */}
              <div className="my-rooms-container">
                <h2>My Sections</h2>
                <div className="rooms-content">
                  {sections.length > 0 ? (
                    sections.map((section) => (
                      <div key={section.sectionID} className="section-card">
                        <h3>{section.section_name}</h3>
                        <p>{section.section_description}</p>
                        <button
                          className="add-student-button"
                          onClick={() => openAddStudentModal(section.sectionID)}
                        >
                          Add Student
                        </button>
                        <button
                          className="edit-section-button"
                          onClick={() => openEditSectionPopup(section)}
                        >
                          Edit Section
                        </button>
                        <button
                          className="delete-section-button"
                          onClick={() => handleDeleteSection(section.sectionID)}
                        >
                          Delete Section
                        </button>
                        <div className="student-list">
                          <h4>Students:</h4>
                          {section.students && section.students.length > 0 ? (
                            section.students.map((student) => (
                              <div key={student.studentId}>
                                <span>{student.firstName} {student.lastName}</span>
                                <button
                                  className="remove-student-button"
                                  onClick={() => handleRemoveStudent(section.sectionID, student.studentId)}
                                >
                                  Remove
                                </button>
                              </div>
                            ))
                          ) : (
                            <p>No students added yet.</p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No sections created yet.</p>
                  )}
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

        {/* Add student modal */}
        {isModalOpen && (
          <div className="add-student-popup-overlay">
            <div className="add-student-popup-content">
              <div className="add-student-popup-header">
                <h3>Add Student to Section</h3>
                <button className="close-popup-button" onClick={() => setIsModalOpen(false)}>X</button>
              </div>
              <div className="add-student-popup-body">
                <input
                  type="text"
                  placeholder="First Name"
                  value={studentFirstName}
                  onChange={(e) => setStudentFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={studentLastName}
                  onChange={(e) => setStudentLastName(e.target.value)}
                />
                <button className="add-student-popup-button" onClick={handleAddStudent}>
                  Add Student
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Fetch students button */}
        <button className="fetch-students-button" onClick={loadStudents} disabled={loadingStudents}>
          {loadingStudents ? 'Loading Students...' : 'Fetch Students'}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
