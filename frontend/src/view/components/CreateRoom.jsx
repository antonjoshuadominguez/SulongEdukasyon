import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Button, TextField, Snackbar, Alert } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { createRoom, fetchRoomsByTeacher } from '../../controller/RoomController';  // Import backend API logic for creating and fetching rooms
import "../css/createroom.css";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [rooms, setRooms] = useState([]); // To store rooms created by the teacher
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const teacherID = 1;  // Replace this with the actual teacher ID

  useEffect(() => {
    fetchTeacherRooms();
  }, [teacherID]); // Fetch rooms whenever the teacher ID changes

  // Fetch rooms created by the teacher
  const fetchTeacherRooms = async () => {
    try {
      const fetchedRooms = await fetchRoomsByTeacher(teacherID);
      setRooms(fetchedRooms);
    } catch (error) {
      setErrorMessage("Error fetching rooms.");
    }
  };

  const handleCreateRoom = async () => {
    // Validate form before making API request
    if (validateForm()) {
      try {
        const roomData = { roomName, roomDescription, teacherID };
        const newRoom = await createRoom(roomData);
        setSuccessMessage(`Room created successfully with code: ${newRoom.roomCode}`);
        resetForm();
        fetchTeacherRooms(); // Re-fetch rooms after successful creation
      } catch (error) {
        setErrorMessage("Error creating room. Please try again.");
      }
    }
  };

  // Validate the form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!roomName.trim()) {
      newErrors.roomName = "Room name is required";
    }

    if (!roomDescription.trim()) {
      newErrors.roomDescription = "Room description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Reset form after successful creation
  const resetForm = () => {
    setRoomName("");
    setRoomDescription("");
    setErrors({});
  };

  return (
    <div className="classes-page">
      <Sidebar />
      <div className="dashboard-container">
        {/* Left Side: My Rooms Button */}
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            display: "flex",
            justifyContent: "flex-start",
            padding: "10px",
          }}
        >
          <Button variant="contained" color="primary" onClick={fetchTeacherRooms}>
            My Rooms
          </Button>
        </Box>

        {/* Top Right: My Rooms Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          <Button variant="contained" color="primary" onClick={fetchTeacherRooms}>
            My Rooms
          </Button>
        </Box>

        {/* Main Content */}
        <Container sx={{ marginTop: "20px" }}>
          <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
            <Typography variant="h4" fontWeight="bold">
              Create Room
            </Typography>
          </Box>

          {/* Create Room Input */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          >
            <TextField
              label="Room Name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              error={!!errors.roomName}
              helperText={errors.roomName}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Room Description"
              value={roomDescription}
              onChange={(e) => setRoomDescription(e.target.value)}
              error={!!errors.roomDescription}
              helperText={errors.roomDescription}
              fullWidth
              margin="normal"
            />
          </Box>

          {/* 4 Pics 1 Word and Drawing Questions */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* Left Panel */}
            <Box
              sx={{
                flex: 1,
                minWidth: "300px",
                backgroundColor: "#e0e0e0",
                borderRadius: "8px",
                padding: "15px",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                textAlign="center"
                marginBottom="10px"
              >
                4 Pics 1 Word Questions
              </Typography>
              <Button
                variant="contained"
                sx={{ display: "block", margin: "20px auto 0" }}
              >
                Create Question
              </Button>
            </Box>

            {/* Right Panel */}
            <Box
              sx={{
                flex: 1,
                minWidth: "300px",
                backgroundColor: "#e0e0e0",
                borderRadius: "8px",
                padding: "15px",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                textAlign="center"
                marginBottom="10px"
              >
                Drawing Questions
              </Typography>
              <Button
                variant="contained"
                sx={{ display: "block", margin: "20px auto 0" }}
              >
                Create Question
              </Button>
            </Box>
          </Box>

          {/* Create Room Button Below Questions */}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{ padding: "10px 20px" }}
              onClick={handleCreateRoom}
            >
              Create Room
            </Button>
          </Box>

          {/* Success or Error Message */}
          {successMessage && (
            <Snackbar open={true} autoHideDuration={6000}>
              <Alert severity="success">{successMessage}</Alert>
            </Snackbar>
          )}
          {errorMessage && (
            <Snackbar open={true} autoHideDuration={6000}>
              <Alert severity="error">{errorMessage}</Alert>
            </Snackbar>
          )}

          {/* Display created rooms */}
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="h6">Created Rooms:</Typography>
            {rooms.length > 0 ? (
              rooms.map((room) => (
                <Box key={room.roomID} sx={{ marginBottom: "10px" }}>
                  <Typography variant="body1">{room.roomName}</Typography>
                  <Typography variant="body2">{room.roomDescription}</Typography>
                </Box>
              ))
            ) : (
              <Typography>No rooms created yet.</Typography>
            )}
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default CreateRoom;
