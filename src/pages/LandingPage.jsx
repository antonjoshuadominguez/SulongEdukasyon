import React from 'react';
import LandingPageContent from "../components/LandingPageContent";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div id="root">
      <Header />
      <div className="app-container">
        <LandingPageContent />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
