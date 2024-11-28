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
          <h3>Teacher</h3>
          <button className="logout">Logout</button>
        </header>

        <h1 className="page-title">Create Room</h1>
        <div className="rooms-list">
          <div className="room-item">
            <span>Room 1: Landforms</span>
            <button className="join-button">Join</button>
          </div>
          <div className="room-item">
            <span>Room 2: Waterforms</span>
            <button className="join-button">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
