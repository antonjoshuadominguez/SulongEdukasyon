import React from 'react';
import '../css/Classes.css';
import Sidebar from './Sidebar';

const Classes = () => {
  return (
    <div className="classes-page">
      <Sidebar />
      <div className="classes-content">
        <header className="classes-header">
          <h1>Classes</h1>
        </header>
        <main className="classes-main">
          <section className="classes-section">
            <h2>Browse Classes</h2>
            <p>Here Are Your List of Classes</p>
            <ul>
              <li>Class 1: Land Forms</li>
              <li>Class 2: Bodies of Water</li>
              <li>Class 3: Grade 6 Classes Example Here</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Classes;
