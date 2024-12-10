import React from "react";
import CreateRoom from "../components/CreateRoom";
import Sidebar from "../components/Sidebar";

const CreateRoomPage = () => {
    return (
        <div className="createroom-page"> 
      <div className="content-container"> 
        <Sidebar />
        <div className="main-content">
          <CreateRoom />
        </div>
      </div>
    </div>
    );
}

export default CreateRoomPage;