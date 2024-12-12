import React from "react";
import "../css/CreateRoom.css";

const CreateRoom = () => {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <header className="header">
        </header>

        <h1 className="page-title">Create Room</h1>

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
