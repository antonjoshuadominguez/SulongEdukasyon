import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateRoomPage from './view/pages/CreateRoomPage'; 
import JoinRoomPage from './view/pages/JoinRoomPage';
import LandingPage from './view/pages/LandingPage';
import UserManagementPage from './view/pages/UserManagementPage';
import DashboardPage from './view/pages/DashboardPage';
import ForgotPasswordPage from './view/pages/ForgotPasswordPage';

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
