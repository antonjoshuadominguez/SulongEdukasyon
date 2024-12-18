import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

// Fetch all sections for a specific teacher
export const fetchSections = async (teacherId) => {
  try {
    const response = await axios.get(`${API_URL}/sections/teacher/${teacherId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching sections');
  }
};

// Create a new section
export const createSection = async (sectionData) => {
  try {
    const response = await axios.post(`${API_URL}/sections/create`, {
      sectionName: sectionData.sectionName,
      sectionDescription: sectionData.sectionDescription,
      teacherID: sectionData.teacherID
    }, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error creating section');
  }
};

// Update section details
export const updateSection = async (sectionId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/sections/update/${sectionId}`, updatedData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error updating section');
  }
};

// Delete a section
export const deleteSection = async (sectionId) => {
  try {
    const response = await axios.delete(`${API_URL}/sections/delete/${sectionId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting section');
  }
};

// Add a student to a section
export const addStudentToSection = async (sectionId, studentId) => {
  try {
    const response = await axios.post(`${API_URL}/sections/add-student/${sectionId}`, { studentID: studentId });
    return response.data;
  } catch (error) {
    throw new Error('Error adding student to section');
  }
};

// Remove a student from a section
export const removeStudentFromSection = async (sectionId, studentId) => {
  try {
    const response = await axios.delete(`${API_URL}/sections/remove-student/${sectionId}/${studentId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error removing student from section');
  }
};

// Fetch all students in the system
export const fetchAllStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/sections/students`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching all students');
  }
};

// Fetch students in a specific section
export const fetchStudentsInSection = async (sectionId) => {
  try {
    const response = await axios.get(`${API_URL}/sections/students/${sectionId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching students from section');
  }
};

// Update a student's information
export const updateStudent = async (studentId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/students/update-student/${studentId}`, updatedData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error updating student');
  }
};
