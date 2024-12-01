import React from 'react';
import LandingPage from './components/LandingPage';
import UserManagement from './components/UserManagement';
import CreateRoom from './components/CreateRoom'; // Import the CreateRoom component
import JoinRoom from './components/JoinRoom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/create-room" element={<CreateRoom />} /> {/* New Route */}
        <Route path="/join-room" element={<JoinRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
