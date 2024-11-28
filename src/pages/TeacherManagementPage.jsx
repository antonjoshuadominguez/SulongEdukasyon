import React from 'react';
import Sidebar from '../components/Sidebar';
import TeacherManagement from '../components/TeacherManagement';

const TeacherManagementPage = () => {
  return (
    <div className="teacher-management-page">
      <Sidebar />
      <TeacherManagement />
    </div>
  );
};

export default TeacherManagementPage;