import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import UserManagementPage from './pages/UserManagementPage';
import TeacherManagementPage from './pages/TeacherManagementPage';
import CreateRoomPage from './pages/CreateRoomPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-management" element={<UserManagementPage />} />
        <Route path="/teacher-management" element={<TeacherManagementPage />} />
        <Route path="/CreateRoom" element={<CreateRoomPage />} />
      </Routes>
    </Router>
  );
}

export default App;
