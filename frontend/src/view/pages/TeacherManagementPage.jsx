import React from 'react';
import Sidebar from "../components/Sidebar";
import TeacherManagement from '../components/TeacherManagement';

const TeacherManagementPage = () => {
  return (
    <div className="teacher-management-page">
      <div className="content-container"> 
        <Sidebar />
        <div className="main-content">
          <TeacherManagement />
        </div>
      </div>
    </div>
  );
};

export default TeacherManagementPage;