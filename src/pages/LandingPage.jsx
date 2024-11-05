import React from 'react';
import LandingPageContent from "../components/LandingPageContent";
import LandingHeader from "../components/LandingHeader";
import LandingFooter from "../components/LandingFooter";

const LandingPage = () => {
  return (
    <div id="root">
      <LandingHeader />
      <div className="app-container">
        <LandingPageContent />
      </div>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
