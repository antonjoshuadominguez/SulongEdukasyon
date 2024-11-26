import React from 'react';
import '../css/Room.css'; // Assuming CSS file exists

const Room = ({ name }) => {
  return (
    <div className="room-item">
      <span>{name}</span>
      <button className="edit-btn">Edit</button>
    </div>
  );
};

export default Room;