import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserManagementPage from './pages/UserManagementPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-management" element={<UserManagementPage />} />
        <Route path="/CreateRoom" element={<DashboardPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
