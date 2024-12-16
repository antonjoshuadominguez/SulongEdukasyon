import React, { useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import Sidebar from "../components/Sidebar";
import "../css/createroom.css";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [errors, setErrors] = useState({});

  const handleCreateRoom = () => {
    // Handle room creation logic here
    console.log({
      roomName,
      roomDescription,
      roomCode,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!roomName.trim()) {
      newErrors.roomName = "Room name is required";
    }

    if (!roomDescription.trim()) {
      newErrors.roomDescription = "Room description is required";
    }

    if (!roomCode.trim()) {
      newErrors.roomCode = "Room code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
          <Button variant="contained" color="primary">
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
          <Button variant="contained" color="primary">
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
            <TextField
              label="Room Code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              error={!!errors.roomCode}
              helperText={errors.roomCode}
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
              <Box
                sx={{
                  backgroundColor: "#007bff",
                  padding: "10px",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                <Typography>Answer: Volcano</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
                  <Button variant="contained" color="primary">img1.png</Button>
                  <Button variant="contained" color="primary">img2.png</Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
                  <Button variant="contained" color="primary">img3.png</Button>
                  <Button variant="contained" color="primary">img4.png</Button>
                </Box>
              </Box>
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
              <Box
                sx={{
                  backgroundColor: "#007bff",
                  padding: "10px",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                <Typography>Answer: Volcano</Typography>
                <Typography>Timer: 60 seconds</Typography>
              </Box>
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
              onClick={() => {
                if (validateForm()) {
                  handleCreateRoom();
                }
              }}
            >
              Create Room
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default CreateRoom;
