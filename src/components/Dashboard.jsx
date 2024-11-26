import React from "react";
import "../css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Account</h2>
        <button>Rooms</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <h3>Teacher</h3>
          <button className="logout">Logout</button>
        </header>

        <h1>Join Room</h1>
        <div className="rooms-list">
          <div className="room-item">
            <span>Room 1: Landforms</span>
            <button>Join</button>
          </div>
          <div className="room-item">
            <span>Room 2: Waterforms</span>
            <button>Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
