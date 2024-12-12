import React from 'react';
import "../css/Translator.css";
import Sidebar from "../components/Sidebar";

const Translator = () => {
  return (
    <div className="translator-page">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Translator Content */}
      <div className="translator-content">
        {/* Separate Header */}
        <div className="translator-header-container">
          <h1 className="translator-header">Language Translator</h1>
        </div>

        {/* Translator Box */}
        <div className="translator-box-container">
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
      </div>
    </div>
  );
};

export default Translator;