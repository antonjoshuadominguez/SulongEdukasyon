import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import all pages
import CreateRoomPage from './view/pages/CreateRoomPage';
import JoinRoomPage from './view/pages/JoinRoomPage';
import LandingPage from './view/pages/LandingPage';
import UserManagementPage from './view/pages/UserManagementPage';
import DashboardPage from './view/pages/DashboardPage';
import ForgotPasswordPage from './view/pages/ForgotPasswordPage';
import TeacherManagementPage from './view/pages/TeacherManagementPage';
import ClassesPage from './view/pages/ClassesPage';
import TranslatorPage from './view/pages/TranslatorPage';
import Class1Page from './view/pages/Class1Page'; // Import Class1Page
import Class2Page from './view/pages/Class2Page'; // Import Class2Page
import Class3Page from './view/pages/Class3Page'; // Import Class3Page

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/usermanagement" element={<UserManagementPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/createroom" element={<CreateRoomPage />} />
        <Route path="/joinroom" element={<JoinRoomPage />} />
        <Route path="/teachermanagement" element={<TeacherManagementPage />} />
        <Route path="/translator" element={<TranslatorPage />} />

        {/* Classes Pages */}
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/classes/class1" element={<Class1Page />} />
        <Route path="/classes/class2" element={<Class2Page />} />
        <Route path="/classes/class3" element={<Class3Page />} />
      </Routes>
    </Router>
  );
}

export default App;
