import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;  // Ensure the URL is correct for your API

// Fetch all rooms by teacher's ID
export const fetchRoomsByTeacher = async (teacherID) => {
  try {
    const response = await axios.get(`${API_URL}/rooms/teacher/${teacherID}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching rooms by teacher');
  }
};

// Fetch a single room by room ID
export const fetchRoomById = async (roomID) => {
  try {
    const response = await axios.get(`${API_URL}/rooms/get/${roomID}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching room by ID');
  }
};

// Create a new room
export const createRoom = async (roomData) => {
  try {
    const response = await axios.post(`${API_URL}/rooms/create`, {
      roomName: roomData.roomName,
      roomDescription: roomData.roomDescription,
      teacherID: roomData.teacherID,  // Pass teacher ID as part of the data
    }, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error creating room');
  }
};

// Update an existing room
export const updateRoom = async (roomID, roomData) => {
  try {
    const response = await axios.put(`${API_URL}/rooms/update/${roomID}`, roomData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error updating room');
  }
};

// Delete a room by room ID
export const deleteRoom = async (roomID) => {
  try {
    const response = await axios.delete(`${API_URL}/rooms/delete/${roomID}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting room');
  }
};

// Add a student to a room using the room code
export const addStudentToRoom = async (roomCode, studentID) => {
  try {
    const response = await axios.post(`${API_URL}/rooms/add-student/${roomCode}`, { studentID });
    return response.data;
  } catch (error) {
    throw new Error('Error adding student to room');
  }
};

// Remove a student from a room using the room code and student ID
export const removeStudentFromRoom = async (roomCode, studentID) => {
  try {
    const response = await axios.delete(`${API_URL}/rooms/remove-student/${roomCode}/${studentID}`);
    return response.data;
  } catch (error) {
    throw new Error('Error removing student from room');
  }
};
