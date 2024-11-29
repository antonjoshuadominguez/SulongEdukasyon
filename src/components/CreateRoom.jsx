import React from "react";
import "../css/CreateRoom.css";

const CreateRoom = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <button className="sidebar-button">Account</button>
        <button className="sidebar-button">Rooms</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <div className="teacher">Teacher</div>
          <button className="logout">Logout</button>
        </header>

        <h1 className="page-title">Create Room</h1>

        {/* Create Room Form */}
        <div className="create-room-container">
          <div className="form-container">
            <input
              type="text"
              className="input-field"
              placeholder="Room Name"
            />
            <textarea
              className="input-field"
              placeholder="Room Description"
              rows="4"
            ></textarea>
            <button className="create-button">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
