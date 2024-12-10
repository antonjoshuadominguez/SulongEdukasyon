import React from "react";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

const DashboardPage = () => {
  return (
    <div className="dashboard-page"> 
      <div className="content-container"> 
        <Sidebar />
        <div className="main-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
