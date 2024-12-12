import React from 'react';
import "../css/TeacherManagement.css";

const TeacherManagement = () => {
  return (
    <div className="teacher-management">
      <div className="header">
        <h1>Teacher Management</h1>
      </div>
      <div className="content">
      <div className="button-grid">
  <button className="card-button">Class List</button>
  <button className="card-button">Activity Details</button>
  <button className="card-button">View Progress and Score</button>
</div>
      </div>
    </div>
  );
};

export default TeacherManagement;
