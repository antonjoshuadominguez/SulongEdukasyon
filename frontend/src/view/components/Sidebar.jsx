import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../css/Sidebar.css';
import calendarLogo from '/calendarlogo.png';
import classesLogo from '/classeslogo.png';
import homeLogo from '/homelogo.png';
import messagesLogo from '/messageslogo.png';
import sulongEdukasyonLogo from '/sulongedukasyonlogo.png';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>
        <img src={sulongEdukasyonLogo} alt="SulongEdukasyon Logo" className="logo" />
        SulongEdukasyon
      </h2>
      <nav>
        <ul>
          <li>
            <Link to="/Dashboard"> {/* Changed to Link component */}
              <img src={homeLogo} alt="Home" />
              Dashboard
            </Link>
          </li>
          <li>
            <a href="#rooms">
              <img src={calendarLogo} alt="Rooms" />
              Rooms
            </a>
          </li>
          <li>
            <a href="#classes">
              <img src={classesLogo} alt="Classes" />
              Classes
            </a>
          </li>
          <li>
            <a href="#messages">
              <img src={messagesLogo} alt="Messages" />
              Messages
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
