import React, { useState } from "react";
import { Container } from "@mui/material";
import "../css/createroom.css"; // Import your updated CSS file

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [errors, setErrors] = useState({});
  const [rooms, setRooms] = useState([]); // List of created rooms
  const [editingIndex, setEditingIndex] = useState(null); // Track which room is being edited

  // Validate the form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!roomName.trim()) {
      newErrors.roomName = "Room name is required";
    } else if (roomName.length > 50) {
      newErrors.roomName = "Room name must be 50 characters or less";
    }

    if (!roomDescription.trim()) {
      newErrors.roomDescription = "Room description is required";
    } else if (roomDescription.length > 200) {
      newErrors.roomDescription = "Description must be 200 characters or less";
    }

    if (!roomCode.trim()) {
      newErrors.roomCode = "Room code is required";
    } else if (roomCode.length !== 6) {
      newErrors.roomCode = "Room code must be exactly 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission (Create or Edit)
  const handleCreateRoom = () => {
    if (validateForm()) {
      if (editingIndex !== null) {
        // Edit existing room
        const updatedRooms = rooms.map((room, index) =>
          index === editingIndex
            ? { name: roomName, description: roomDescription, code: roomCode }
            : room
        );
        setRooms(updatedRooms);
        setEditingIndex(null); // Exit edit mode
      } else {
        // Add a new room
        const newRoom = {
          name: roomName,
          description: roomDescription,
          code: roomCode,
        };
        setRooms([...rooms, newRoom]);
      }

      // Reset input fields
      setRoomName("");
      setRoomDescription("");
      setRoomCode("");
      setErrors({});
    }
  };

  // Handle editing a room
  const handleEditRoom = (index) => {
    const roomToEdit = rooms[index];
    setRoomName(roomToEdit.name);
    setRoomDescription(roomToEdit.description);
    setRoomCode(roomToEdit.code);
    setEditingIndex(index); // Set current editing index
  };

  // Handle deleting a room
  const handleDeleteRoom = (index) => {
    const updatedRooms = rooms.filter((_, i) => i !== index);
    setRooms(updatedRooms);
  };

  return (
    <div className="dashboard-container">
      <Container fixed maxWidth="xs" sx={{ marginTop: "20px" }}>
        <h1 className="page-title" style={{ textAlign: "center", color: "#333" }}>
          {editingIndex !== null ? "Edit Room" : "Create Room"}
        </h1>
        <div className="create-room-container">
          {/* Input Fields */}
          <input
            type="text"
            className={`input-field ${errors.roomName ? "error" : ""}`}
            placeholder="Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            maxLength={50}
          />
          {errors.roomName && <p className="error-message">{errors.roomName}</p>}

          <input
            type="text"
            className={`input-field ${errors.roomDescription ? "error" : ""}`}
            placeholder="Room Description"
            value={roomDescription}
            onChange={(e) => setRoomDescription(e.target.value)}
            maxLength={200}
          />
          {errors.roomDescription && (
            <p className="error-message">{errors.roomDescription}</p>
          )}

          <input
            type="text"
            className={`input-field ${errors.roomCode ? "error" : ""}`}
            placeholder="Room Code (6 characters)"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            maxLength={6}
          />
          {errors.roomCode && <p className="error-message">{errors.roomCode}</p>}

          {/* Create or Save Button */}
          <button className="create-button" onClick={handleCreateRoom}>
            {editingIndex !== null ? "Save Changes" : "Create"}
          </button>
        </div>

        {/* List of Created Rooms */}
        <div className="rooms-list" style={{ marginTop: "20px" }}>
          {rooms.map((room, index) => (
            <div key={index} className="room-card">
              <h2>{room.name}</h2>
              <p>{room.description}</p>
              <span>Room Code: {room.code}</span>
              <div className="room-actions">
                <button className="edit-button" onClick={() => handleEditRoom(index)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => handleDeleteRoom(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CreateRoom;
