import React from 'react';
import '../css/Dashboard.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Welcome to Your Dashboard</h1>
        </header>
        <main className="dashboard-main">
          <section className="dashboard-section">
            <h2>Main Dashboard Content</h2>
            <p>Here is where the core functionalities will appear.</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
