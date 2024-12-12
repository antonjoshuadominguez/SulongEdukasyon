import React, { useState } from "react";
import { Container } from "@mui/material";
import "../css/CreateRoom.css";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [errors, setErrors] = useState({});

  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setRoomCode(code);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!roomName.trim()) {
      newErrors.roomName = "Room name is required";
    }

    if (roomName.length > 50) {
      newErrors.roomName = "Room name must be 50 characters or less";
    }

    if (!roomDescription.trim()) {
      newErrors.roomDescription = "Room description is required";
    }

    if (roomDescription.length > 200) {
      newErrors.roomDescription = "Description must be 200 characters or less";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateRoom = () => {
    if (validateForm()) {
      console.log("Room Creation Details:", {
        roomName,
        roomDescription,
        roomCode
      });
      alert("Room Created Successfully!");
    }
  };

  return (
    <div className="dashboard-container">
      <Container 
        fixed 
        maxWidth="xs"
        sx={{
          width: '100%',
          padding: '0 !important',
          marginTop: '20px' // Moved closer to the top
        }}
      > 
          <h1 className="page-title">Create Room</h1>
        <div className="create-room-container">
          <div>
            <input  
              type="text"
              className={`input-field ${errors.roomName ? 'error' : ''}`}
              placeholder="Room Name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              maxLength={50}
            />
            {errors.roomName && (
              <p className="error-message">{errors.roomName}</p>
            )}

              <input
              type="text"
              className={`input-field ${errors.roomDescription ? 'error' : ''}`}
              placeholder="Room Description"
              value={roomDescription}
              onChange={(e) => setRoomDescription(e.target.value)}
              maxLength={200}
           />
            {errors.roomDescription && (
              <p className="error-message">{errors.roomDescription}</p>
            )}

            <div className="room-code-container">
              <input
                type="text"
                className="input-field room-code"
                placeholder="Room Code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                readOnly
              />
              <button 
                className="create-button" 
                onClick={handleCreateRoom}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreateRoom;