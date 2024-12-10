import React from 'react';
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
            <a href="#Home">
              <img src={homeLogo} alt="Home" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#calendar">
              <img src={calendarLogo} alt="Calendar" />
              Calendar
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
