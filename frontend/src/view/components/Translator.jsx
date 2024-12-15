import React from "react";
import { Container } from "@mui/material";
import Sidebar from "../components/Sidebar";
import "../css/translator.css"; // Make sure to keep CSS linked properly

const Translator = () => {
  return (
    <div className="classes-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Translator Content */}
      <div className="dashboard-container">
        <Container fixed maxWidth="xs" sx={{ marginTop: "50px" }}>
          <h1 className="page-title" style={{ textAlign: "center", color: "#333" }}>
            Language Translator
          </h1>

          <div className="create-room-container">
            <div className="translator-box">
              <div className="language-options">
                <span>English</span>
                <span className="swap-icon">⇆</span>
                <span>Tagalog</span>
              </div>
              <textarea
                className="text-input"
                placeholder="Enter text here"
              ></textarea>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Translator;