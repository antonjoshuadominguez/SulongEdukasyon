import React from "react";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import "../css/DashboardPage.css";

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
