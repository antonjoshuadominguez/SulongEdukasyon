import React from 'react';
import "../css/TeacherManagement.css";

const TeacherManagement = () => {
  return (
    <div className="teacher-management">
      <div className="header">
        <h1>Teacher Management</h1>
        <button className="logout-button">Logout</button>
      </div>
      <div className="content">
        <div className="card-grid">
          <div className="card">Class List</div>
          <div className="card">Activity Details</div>
          <div className="card">View Progress and Score</div>
        </div>
        <div className="student-leaderboard">
          <h2>Student Leaderboard</h2>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default TeacherManagement;