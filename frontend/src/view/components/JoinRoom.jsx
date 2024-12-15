import React, { useState } from "react";
import { Container } from "@mui/material";
import Sidebar from "../components/Sidebar"; // Ensure this import is correct
import "../css/createroom.css"; // Reuse the same CSS or create a new one if needed

const JoinRoom = () => {
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle joining the room
  const handleJoinRoom = () => {
    if (!roomCode.trim()) {
      setError("Room code is required");
      setSuccessMessage("");
    } else if (roomCode.length !== 6) {
      setError("Room code must be exactly 6 characters");
      setSuccessMessage("");
    } else {
      // Simulate room validation
      const roomExists = validateRoomCode(roomCode); // Replace with actual backend API call

      if (roomExists) {
        setError("");
        setSuccessMessage(`Successfully joined room with code: ${roomCode}`);
        setRoomCode(""); // Clear input field
      } else {
        setError("Invalid room code. Room not found.");
        setSuccessMessage("");
      }
    }
  };

  // Mock function to simulate room validation
  const validateRoomCode = (code) => {
    // Replace this with actual API logic to verify room code
    const mockRoomCodes = ["ABC123", "XYZ456", "DEF789"];
    return mockRoomCodes.includes(code);
  };

  return (
    <div className="classes-page">
      <Sidebar />
      <div className="dashboard-container">
        <Container fixed maxWidth="xs" sx={{ marginTop: "50px" }}>
          <h1 className="page-title" style={{ textAlign: "center", color: "#333" }}>
            Join Room
          </h1>
          <div className="create-room-container">
            <input
              type="text"
              className={`input-field ${error ? "error" : ""}`}
              placeholder="Enter Room Code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              maxLength={6}
            />
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <button className="create-button" onClick={handleJoinRoom}>
              Join
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default JoinRoom;
