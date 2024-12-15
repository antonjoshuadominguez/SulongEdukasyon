import React from "react";
import { Container } from "@mui/material"; // For consistent centered layout
import Sidebar from "../components/Sidebar"; // Assuming you have a Sidebar component
import "../css/TeacherManagement.css"; // Ensure this CSS file exists

const TeacherManagement = () => {
  return (
    <div className="classes-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Teacher Management Content */}
      <div className="dashboard-container">
        <Container fixed maxWidth="xs" sx={{ marginTop: "50px" }}>
          <h1 className="page-title" style={{ textAlign: "center", color: "#333" }}>
            Teacher Management
          </h1>

          <div className="create-room-container">
            <div className="button-grid">
              <button className="card-button">Class List</button>
              <button className="card-button">Activity Details</button>
              <button className="card-button">View Progress and Score</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TeacherManagement;