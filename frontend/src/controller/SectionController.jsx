import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchSections = async (teacherId) => {
  try {
    const response = await axios.get(`${API_URL}/api/sections/teacher/${teacherId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching sections');
  }
};

export const createSection = async (sectionData) => {
  try {
    const response = await axios.post(`${API_URL}/api/sections/create`, sectionData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error creating section');
  }
};

export const updateSection = async (sectionId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/api/sections/update/${sectionId}`, updatedData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error updating section');
  }
};

export const deleteSection = async (sectionId) => {
  try {
    const response = await axios.delete(`${API_URL}/api/sections/delete/${sectionId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting section');
  }
};
