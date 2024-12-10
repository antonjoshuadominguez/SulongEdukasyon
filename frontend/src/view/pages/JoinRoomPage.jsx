import React from "react";
import JoinRoom from "../components/JoinRoom";
import Sidebar from "../components/Sidebar";

const CreateRoomPage = () => {
    return (
        <div className="joinroom-page"> 
      <div className="content-container"> 
        <Sidebar />
        <div className="main-content">
          <JoinRoom />
        </div>
      </div>
    </div>
    );
}

export default CreateRoomPage;