import React from 'react';
import LandingPage from './components/LandingPage';
import UserManagement from './components/UserManagement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-management" element={<UserManagement />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;