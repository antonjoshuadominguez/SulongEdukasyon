import React from "react";
import "../css/JoinRoom.css";
import Sidebar from "../components/Sidebar"; // Import Sidebar component

const JoinRoom = () => {
  return (
    <div className="joinroom-page">
      <Sidebar /> {/* Sidebar on the left */}
      <div className="main-content">
        <header className="header">
          <div className="student">Student</div>
          <button className="logout">Logout</button>
        </header>

        <h1 className="page-title">Join Room</h1>

        <div className="create-room-container">
          <div className="form-container">
            <input
              type="text"
              className="input-field"
              placeholder="Room Name"
            />
              <input
              type="text"
              className="input-field"
              placeholder="Room Code"
            />
            <button className="create-button">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
