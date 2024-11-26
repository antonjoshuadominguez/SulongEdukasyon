import React from "react";
import JoinRoom from "../components/CreateRoom";
import Sidebar from "../components/Sidebar";
import "../css/DashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-page"> 
      <div className="content-container"> 
        <div className="main-content">
          <JoinRoom />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
