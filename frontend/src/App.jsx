import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateRoomPage from './pages/CreateRoomPage'; 
import JoinRoomPage from './pages/JoinRoomPage';
import LandingPage from './pages/LandingPage';
import UserManagementPage from './pages/UserManagementPage';
import DashboardPage from './pages/DashboardPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/usermanagement" element={<UserManagementPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/createroom" element={<CreateRoomPage />} /> 
        <Route path="/joinroom" element={<JoinRoomPage />} />
      </Routes>
    </Router>
  );
}

export default App;
