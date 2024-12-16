import React from 'react';
import '../css/Classes.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const ClassesPage = () => {
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
            <p>Select a class to explore more:</p>
            <ul className="classes-list">
              <li>
                <Link to="/classes/class1" className="class-link">
                  Class 1: Land Forms
                </Link>
              </li>
              <li>
                <Link to="/classes/class2" className="class-link">
                  Class 2: Bodies of Water
                </Link>
              </li>
              <li>
                <Link to="/classes/class3" className="class-link">
                  Class 3: Grade 6 Classes Example Here
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ClassesPage;
