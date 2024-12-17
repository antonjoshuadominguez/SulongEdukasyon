// import axios from 'axios';

// // This base URL will be the backend URL stored in your `.env` file or the VITE_BACKEND_URL environment variable
// const API_URL = import.meta.env.VITE_BACKEND_URL;

// // Fetch sections for a specific teacher
// export const fetchSections = async (teacherId) => {
//   try {
//     const response = await axios.get(`${API_URL}/api/sections/teacher/${teacherId}`);
//     return response.data; // Returning the sections array
//   } catch (error) {
//     throw new Error('Error fetching sections');
//   }
// };

// // Create a new section
// export const createSection = async (sectionData) => {
//   try {
//     const response = await axios.post(`${API_URL}/api/sections/create`, sectionData, {
//       headers: { 'Content-Type': 'application/json' },
//     });
//     return response.data; // Returning the created section
//   } catch (error) {
//     throw new Error('Error creating section');
//   }
// };

// // Update an existing section
// export const updateSection = async (sectionId, updatedData) => {
//   try {
//     const response = await axios.put(`${API_URL}/api/sections/update/${sectionId}`, updatedData, {
//       headers: { 'Content-Type': 'application/json' },
//     });
//     return response.data; // Returning the updated section
//   } catch (error) {
//     throw new Error('Error updating section');
//   }
// };

// // Delete a section
// export const deleteSection = async (sectionId) => {
//   try {
//     const response = await axios.delete(`${API_URL}/api/sections/delete/${sectionId}`);
//     return response.data; // Returning success message after deletion
//   } catch (error) {
//     throw new Error('Error deleting section');
//   }
// };
